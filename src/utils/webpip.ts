import { unzipSync } from "fflate";

export type EmscriptenModule = {
  FS: any;
  addRunDependency?: (id: string) => void;
  removeRunDependency?: (id: string) => void;
};

export type ProgressCallback = (message: string) => void;

export type ProxyFetch = (url: string, init?: RequestInit) => Promise<Response>;

type InstalledDist = {
  name: string;
  version?: string;
  distInfoPath: string;
  metadataPath: string;
  recordPath: string;
  dependencies: string[];
};

function normalizeName(name: string) {
  return name.toLowerCase().replace(/[-_.]+/g, "-");
}

function parseVersion(version: string): number[] {
  const cleaned = version.trim().replace(/[^0-9.].*$/, "");
  if (!cleaned) return [];
  return cleaned.split(".").map((part) => Number(part)).filter((n) => Number.isFinite(n));
}

function compareVersions(a: string, b: string): number {
  const av = parseVersion(a);
  const bv = parseVersion(b);
  const max = Math.max(av.length, bv.length);
  for (let i = 0; i < max; i += 1) {
    const ai = av[i] ?? 0;
    const bi = bv[i] ?? 0;
    if (ai !== bi) return ai < bi ? -1 : 1;
  }
  return 0;
}

function satisfiesRequiresPython(pythonVersion: string, spec?: string | null): boolean {
  if (!spec) return true;
  const py = parseVersion(pythonVersion);
  if (py.length === 0) return true;

  const parts = spec.split(",").map((p) => p.trim()).filter(Boolean);
  for (const part of parts) {
    const match = part.match(/^(>=|<=|==|!=|>|<)\s*([0-9][0-9.]*).*$/);
    if (!match) {
      continue;
    }
    const op = match[1];
    const rhs = parseVersion(match[2]);
    if (rhs.length === 0) continue;

    const cmp = compareVersions(py.join("."), rhs.join("."));
    if (op === ">=" && cmp < 0) return false;
    if (op === ">" && cmp <= 0) return false;
    if (op === "<=" && cmp > 0) return false;
    if (op === "<" && cmp >= 0) return false;
    if (op === "==" && cmp !== 0) return false;
    if (op === "!=" && cmp === 0) return false;
  }

  return true;
}

async function sha256Hex(buf: ArrayBuffer): Promise<string | null> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) return null;
  const hash = await subtle.digest("SHA-256", buf);
  return [...new Uint8Array(hash)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function pickUniversalWheel(files: any[], pythonVersion: string): any | null {
  const wheels = files.filter(
    (file) =>
      file &&
      file.packagetype === "bdist_wheel" &&
      typeof file.filename === "string" &&
      satisfiesRequiresPython(pythonVersion, file.requires_python),
  );

  return (
    wheels.find((file) => file.filename.endsWith("-py3-none-any.whl")) ??
    wheels.find((file) => file.filename.endsWith("-py2.py3-none-any.whl")) ??
    null
  );
}

function mapWheelEntryToDest(entryPath: string, destRoot: string): string | null {
  if (entryPath.endsWith("/")) return null;

  const pure = entryPath.match(/^[^/]+\.data\/purelib\/(.+)$/);
  if (pure) return `${destRoot}/${pure[1]}`;

  const plat = entryPath.match(/^[^/]+\.data\/platlib\/(.+)$/);
  if (plat) return `${destRoot}/${plat[1]}`;

  return `${destRoot}/${entryPath}`;
}

function ensureDir(FS: any, filePath: string) {
  const idx = filePath.lastIndexOf("/");
  if (idx <= 0) return;
  FS.mkdirTree(filePath.slice(0, idx));
}

function parseRequiresDistFromMetadata(metadataText: string): string[] {
  const deps: string[] = [];

  for (const line of metadataText.split(/\r?\n/)) {
    if (!line.toLowerCase().startsWith("requires-dist:")) continue;
    const raw = line.slice("Requires-Dist:".length).trim();
    const noMarker = raw.split(";")[0].trim();

    // Examples:
    // - "blinker>=1.9.0"
    // - "click (>=8.1.3)"
    // - "requests[socks]>=2.31.0"
    // - "foo @ https://example.com/foo.whl"
    const nameMatch = noMarker.match(/^([A-Za-z0-9][A-Za-z0-9._-]*)/);
    if (!nameMatch) continue;

    deps.push(normalizeName(nameMatch[1]));
  }

  return [...new Set(deps)];
}

function parseMetadataValue(metadataText: string, field: string): string | null {
  const prefix = `${field}:`;
  for (const line of metadataText.split(/\r?\n/)) {
    if (line.startsWith(prefix)) return line.slice(prefix.length).trim();
  }
  return null;
}

function parseNameAndVersionFromMetadata(metadataText: string): { name?: string; version?: string } {
  return {
    name: parseMetadataValue(metadataText, "Name") ?? undefined,
    version: parseMetadataValue(metadataText, "Version") ?? undefined,
  };
}

function readTextFile(FS: any, path: string): string | null {
  try {
    const bytes = FS.readFile(path);
    return new TextDecoder("utf-8").decode(bytes);
  } catch {
    return null;
  }
}

function parseDistInfoName(entry: string): string {
  const trimmed = entry.replace(/\.dist-info$/, "");
  const idx = trimmed.lastIndexOf("-");
  return idx > 0 ? trimmed.slice(0, idx) : trimmed;
}

function listInstalledDistributions(FS: any, destRoot: string): Map<string, InstalledDist> {
  const installed = new Map<string, InstalledDist>();
  let entries: string[] = [];
  try {
    entries = FS.readdir(destRoot);
  } catch {
    return installed;
  }

  for (const entry of entries) {
    if (!entry.endsWith(".dist-info")) continue;
    const distInfoPath = `${destRoot}/${entry}`;
    const metadataPath = `${distInfoPath}/METADATA`;
    const recordPath = `${distInfoPath}/RECORD`;
    const metadataText = readTextFile(FS, metadataPath);
    const parsed = metadataText ? parseNameAndVersionFromMetadata(metadataText) : {};
    const name = parsed.name ?? parseDistInfoName(entry);
    const dependencies = metadataText ? parseRequiresDistFromMetadata(metadataText) : [];
    installed.set(normalizeName(name), {
      name,
      version: parsed.version,
      distInfoPath,
      metadataPath,
      recordPath,
      dependencies,
    });
  }

  return installed;
}

function parseRecordPath(line: string): string | null {
  if (!line) return null;
  let value = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    if (ch === "\"") {
      if (inQuotes && line[i + 1] === "\"") {
        value += "\"";
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (ch === "," && !inQuotes) break;
    value += ch;
  }
  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

function normalizeRecordPath(recordPath: string): string | null {
  const clean = recordPath.replace(/\\/g, "/").trim();
  if (!clean || clean.startsWith("/") || clean.includes("..")) return null;
  return clean;
}

function readRecordPaths(FS: any, recordPath: string): string[] {
  const text = readTextFile(FS, recordPath);
  if (!text) return [];
  const paths: string[] = [];
  for (const line of text.split(/\r?\n/)) {
    const raw = parseRecordPath(line);
    if (!raw) continue;
    const normalized = normalizeRecordPath(raw);
    if (normalized) paths.push(normalized);
  }
  return paths;
}

function removePath(FS: any, path: string) {
  try {
    FS.unlink(path);
    return;
  } catch {
    // ignore and attempt directory removal
  }
  try {
    FS.rmdir(path);
  } catch {
    // ignore
  }
}

function collectParentDirs(path: string, destRoot: string, dirs: Set<string>) {
  let current = path;
  while (current.startsWith(`${destRoot}/`)) {
    const idx = current.lastIndexOf("/");
    if (idx <= destRoot.length) break;
    current = current.slice(0, idx);
    dirs.add(current);
  }
}

function cleanupDirs(FS: any, dirs: Set<string>) {
  const ordered = [...dirs].sort((a, b) => b.length - a.length);
  for (const dir of ordered) {
    try {
      FS.rmdir(dir);
    } catch {
      // ignore non-empty directories
    }
  }
}

function removeDistFiles(FS: any, dist: InstalledDist, destRoot: string) {
  const recordPaths = readRecordPaths(FS, dist.recordPath);
  const dirs = new Set<string>();
  for (const recordPath of recordPaths) {
    const fullPath = `${destRoot}/${recordPath}`;
    removePath(FS, fullPath);
    collectParentDirs(fullPath, destRoot, dirs);
  }

  if (recordPaths.length === 0) {
    removePath(FS, dist.distInfoPath);
    collectParentDirs(dist.distInfoPath, destRoot, dirs);
  }

  cleanupDirs(FS, dirs);
}

function buildDependents(installed: Map<string, InstalledDist>): Map<string, Set<string>> {
  const dependents = new Map<string, Set<string>>();
  for (const [pkg, dist] of installed) {
    for (const dep of dist.dependencies) {
      if (!installed.has(dep)) continue;
      const set = dependents.get(dep) ?? new Set<string>();
      set.add(pkg);
      dependents.set(dep, set);
    }
  }
  return dependents;
}

function resolveRemovalOrder(
  target: string,
  installed: Map<string, InstalledDist>,
  withDeps: boolean,
): string[] {
  if (!withDeps) return [target];
  const dependents = buildDependents(installed);
  const queue = [target];
  const scheduled = new Set<string>();
  const order: string[] = [];

  while (queue.length > 0) {
    const pkg = queue.shift()!;
    if (scheduled.has(pkg)) continue;
    scheduled.add(pkg);
    order.push(pkg);

    const dist = installed.get(pkg);
    if (!dist) continue;
    for (const dep of dist.dependencies) {
      if (!installed.has(dep)) continue;
      const set = dependents.get(dep);
      if (set) {
        set.delete(pkg);
        if (set.size === 0) {
          queue.push(dep);
        }
      } else {
        queue.push(dep);
      }
    }
  }

  return order;
}

function isInstalled(FS: any, destRoot: string, normalizedName: string): boolean {
  try {
    const entries: string[] = FS.readdir(destRoot);
    const base = normalizedName.replace(/-/g, "_").toLowerCase();
    return entries.some(
      (entry) =>
        entry.toLowerCase().startsWith(`${base}-`) && entry.toLowerCase().endsWith(".dist-info"),
    );
  } catch {
    return false;
  }
}

async function pickVersionAndWheel(args: {
  meta: any;
  pythonVersion: string;
}): Promise<{ version: string; wheel: any }> {
  const { meta, pythonVersion } = args;
  const releases = meta?.releases ?? {};

  const versions = Object.keys(releases);
  const preferred = typeof meta?.info?.version === "string" ? meta.info.version : null;
  const candidates = preferred ? [preferred, ...versions] : versions;
  const unique = [...new Set(candidates)].filter(Boolean);

  unique.sort((a, b) => compareVersions(b, a));

  for (const version of unique) {
    const files = releases[version];
    if (!Array.isArray(files) || files.length === 0) continue;
    const wheel = pickUniversalWheel(files, pythonVersion);
    if (wheel) return { version, wheel };
  }

  throw new Error("No universal wheel found for current Python version.");
}

export async function installFromPyPI(opts: {
  module: EmscriptenModule;
  name: string;
  pythonVersion: string;
  destRoot?: string;
  withDeps?: boolean;
  proxyFetch: ProxyFetch;
  onProgress?: ProgressCallback;
  visited?: Set<string>;
}) {
  const {
    module,
    name,
    pythonVersion,
    destRoot = "/packages",
    withDeps = false,
    proxyFetch,
    onProgress,
    visited,
  } = opts;

  const FS = module.FS;
  const pkg = normalizeName(name);
  const seen = visited ?? new Set<string>();
  if (seen.has(pkg)) return;
  seen.add(pkg);

  FS.mkdirTree(destRoot);
  if (isInstalled(FS, destRoot, pkg)) {
    onProgress?.(`${pkg}: already installed`);
    return;
  }

  onProgress?.(`${pkg}: fetching metadata`);
  const jsonResp = await proxyFetch(`https://pypi.org/pypi/${pkg}/json`);
  if (!jsonResp.ok) throw new Error(`PyPI JSON fetch failed: ${pkg} ${jsonResp.status}`);
  const meta = await jsonResp.json();

  let versionAndWheel: { version: string; wheel: any };
  try {
    versionAndWheel = await pickVersionAndWheel({ meta, pythonVersion });
  } catch (err: any) {
    throw new Error(`${pkg}: ${err?.message ?? "failed to select a compatible wheel"}`);
  }
  const { version, wheel } = versionAndWheel;

  const wheelUrl: string = wheel.url;
  const expectedSha256: string | undefined = wheel.digests?.sha256;

  onProgress?.(`${pkg}: downloading ${wheel.filename}`);
  const resp = await proxyFetch(wheelUrl);
  if (!resp.ok) throw new Error(`Wheel download failed: ${wheelUrl} ${resp.status}`);
  const wheelBuf = await resp.arrayBuffer();

  if (expectedSha256) {
    const got = await sha256Hex(wheelBuf);
    if (got && got !== expectedSha256) {
      throw new Error(`SHA256 mismatch for ${wheel.filename}: expected ${expectedSha256}, got ${got}`);
    }
  }

  onProgress?.(`${pkg}: extracting`);
  const zip = unzipSync(new Uint8Array(wheelBuf));

  let metadataText: string | null = null;

  for (const [entryPath, bytes] of Object.entries(zip)) {
    const dest = mapWheelEntryToDest(entryPath, destRoot);
    if (!dest) continue;
    ensureDir(FS, dest);
    FS.writeFile(dest, bytes);

    if (entryPath.endsWith(".dist-info/METADATA")) {
      metadataText = new TextDecoder("utf-8").decode(bytes);
    }
  }

  onProgress?.(`${pkg}: installed (${version})`);

  if (withDeps && metadataText) {
    const deps = parseRequiresDistFromMetadata(metadataText);
    for (const dep of deps) {
      await installFromPyPI({
        module,
        name: dep,
        pythonVersion,
        destRoot,
        withDeps: true,
        proxyFetch,
        onProgress,
        visited: seen,
      });
    }
  }
}

export async function uninstallFromPyPI(opts: {
  module: EmscriptenModule;
  name: string;
  destRoot?: string;
  withDeps?: boolean;
  onProgress?: ProgressCallback;
}) {
  const { module, name, destRoot = "/packages", withDeps = true, onProgress } = opts;
  const FS = module.FS;
  const installed = listInstalledDistributions(FS, destRoot);
  if (installed.size === 0) throw new Error("No packages installed.");

  const target = normalizeName(name);
  if (!installed.has(target)) {
    throw new Error(`${name}: not installed`);
  }

  const removalOrder = resolveRemovalOrder(target, installed, withDeps);
  for (const pkg of removalOrder) {
    const dist = installed.get(pkg);
    if (!dist) continue;
    onProgress?.(`${dist.name}: removing`);
    removeDistFiles(FS, dist, destRoot);
    onProgress?.(`${dist.name}: removed`);
  }
}
