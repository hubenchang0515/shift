import { Box, Button, IconButton, Input, Paper, Tooltip, Typography } from "@mui/material";
import Loading from "./Loading";
import { useCallback, useEffect, useRef, useState } from "react";

import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DeleteIcon from '@mui/icons-material/Delete';

// @ts-ignore
import python from '../wasm/python.js';
import { installFromPyPI, uninstallFromPyPI } from "../utils/webpip.js";
import { mountPipPackages } from "../utils/pipfs.js";

const PYTHON_VERSION = "3.13.1+";
const proxyFetch = fetch; // pip 没有禁止跨域，不需要代理

export interface PipInstallerProps {
    language: string;
    onMessage?: (message:string)=>void;
    onClose?: ()=>void;
}

export default function PipInstaller(props:PipInstallerProps) {
    const [pipPackageName, setPipPackageName] = useState<string>("");
    const [pipInstalling, setPipInstalling] = useState(false);
    const [pipRemoving, setPipRemoving] = useState(false);
    const [pipInstalled, setPipInstalled] = useState<Array<{name:string; version?:string}>>([]);
    const [pipInstalledLoading, setPipInstalledLoading] = useState(false);

    const pipInstallerModuleRef = useRef<any>(null);
    const pipInstallerModulePromiseRef = useRef<Promise<any> | null>(null);

        const locateWasmFile = useCallback((path: string, scriptDirectory: string) => {
        if (path.endsWith(".data") || path.endsWith(".wasm")) {
            return import.meta.env.BASE_URL + "wasm/" + path;
        }
        return scriptDirectory + path;
    }, []);

    const ensurePythonPackages = useCallback(mountPipPackages, []);

    const syncfs = useCallback((module: any, populate: boolean) => {
        return new Promise<void>((resolve, reject) => {
            module.FS.syncfs(populate, (err: any) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }, []);

    const getPipInstallerModule = useCallback(async () => {
        if (pipInstallerModuleRef.current) return pipInstallerModuleRef.current;
        if (pipInstallerModulePromiseRef.current) return pipInstallerModulePromiseRef.current;

        pipInstallerModulePromiseRef.current = python({
            noInitialRun: true,
            locateFile: locateWasmFile,
            ENV: {
                PYTHONPATH: "/packages",
            },
            preRun: [
                (module: any) => {
                    ensurePythonPackages(module, true);
                }
            ],
        }).then((module: any) => {
            pipInstallerModuleRef.current = module;
            return module;
        });

        return pipInstallerModulePromiseRef.current;
    }, [ensurePythonPackages, locateWasmFile]);

    const loadInstalledPackages = useCallback(async () => {
        if (props.language !== "python") return;

        setPipInstalledLoading(true);
        try {
            const module = await getPipInstallerModule();

            if (module?.FS?.filesystems?.IDBFS) {
                await syncfs(module, true);
            }

            const FS = module.FS;
            const entries: string[] = FS.readdir("/packages");
            const distInfos = entries.filter((e) => e !== "." && e !== ".." && e.endsWith(".dist-info"));

            const pkgs: Array<{name:string; version?:string}> = [];
            for (const distInfo of distInfos) {
                let name: string | undefined;
                let version: string | undefined;
                try {
                    const bytes = FS.readFile(`/packages/${distInfo}/METADATA`);
                    const text = new TextDecoder("utf-8").decode(bytes);
                    for (const line of text.split(/\r?\n/)) {
                        if (!name && line.startsWith("Name:")) name = line.slice("Name:".length).trim();
                        if (!version && line.startsWith("Version:")) version = line.slice("Version:".length).trim();
                        if (name && version) break;
                    }
                } catch {
                    // ignore metadata read failures
                }

                pkgs.push({ name: name ?? distInfo.replace(/\\.dist-info$/, ""), version });
            }

            const uniq = new Map<string, {name:string; version?:string}>();
            for (const p of pkgs) {
                const key = p.name.toLowerCase();
                if (!uniq.has(key)) uniq.set(key, p);
            }

            setPipInstalled([...uniq.values()].sort((a, b) => a.name.localeCompare(b.name)));
        } catch (err: any) {
            setPipInstalled([]);
            props.onMessage?.(err?.message ?? "Failed to load installed packages.");
        } finally {
            setPipInstalledLoading(false);
        }
    }, [getPipInstallerModule, props.language, syncfs]);

    const installPipPackage = useCallback(async () => {
        if (props.language !== "python") return;
        if (pipRemoving) return;
        const name = pipPackageName.trim();
        if (!name) return;

        setPipInstalling(true);
        try {
            const module = await getPipInstallerModule();

            if (!module?.FS?.filesystems?.IDBFS) {
                props.onMessage?.("IDBFS not available; packages will not persist.");
            }

            await syncfs(module, true);

            await installFromPyPI({
                module,
                name,
                pythonVersion: PYTHON_VERSION,
                destRoot: "/packages",
                withDeps: true,
                proxyFetch,
                onProgress: (msg) => {
                    props.onMessage?.(`${msg}\n`);
                },
            });

            if (module?.FS?.filesystems?.IDBFS) {
                await syncfs(module, false);
            }

            props.onMessage?.(`Installed: ${name}\n`);
            loadInstalledPackages();
        } catch (err: any) {
            props.onMessage?.(err?.message ?? "Install failed.");
        } finally {
            setPipInstalling(false);
        }
    }, [getPipInstallerModule, props.language, pipPackageName, pipRemoving, syncfs, props.onMessage, loadInstalledPackages]);

    const uninstallPipPackage = useCallback(async (pkgName: string) => {
        if (props.language !== "python") return;
        if (pipInstalling || pipRemoving) return;
        const name = pkgName.trim();
        if (!name) return;

        setPipRemoving(true);
        try {
            const module = await getPipInstallerModule();

            if (!module?.FS?.filesystems?.IDBFS) {
                props.onMessage?.("IDBFS not available; packages will not persist.");
            }

            await syncfs(module, true);

            await uninstallFromPyPI({
                module,
                name,
                destRoot: "/packages",
                withDeps: true,
                onProgress: (msg) => {
                    props.onMessage?.(`${msg}\n`);
                },
            });

            if (module?.FS?.filesystems?.IDBFS) {
                await syncfs(module, false);
            }

            props.onMessage?.(`Uninstalled: ${name}\n`);
            loadInstalledPackages();
        } catch (err: any) {
            props.onMessage?.(err?.message ?? "Uninstall failed.");
        } finally {
            setPipRemoving(false);
        }
    }, [getPipInstallerModule, props.language, loadInstalledPackages, pipInstalling, pipRemoving, syncfs, props.onMessage]);

    useEffect(() => {
        if (props.language === "python") {
            loadInstalledPackages();
        }
    }, [props.language, loadInstalledPackages]);
    
    return (
        <Paper
            elevation={0}
            sx={{
                width: {xs:'100vw', md:300},
                height: '100%',
                borderRadius: 0,
                backgroundColor: '#2E3440',
                borderRight: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 1,
                    py: 0.75,
                    borderBottom: '1px solid rgba(255,255,255,0.12)',
                }}
            >
                <Typography variant="subtitle2" sx={{pt:1, fontWeight:'bold'}}>Packages</Typography>
                <IconButton onClick={props.onClose}><KeyboardArrowLeftIcon/></IconButton>
            </Box>

            <Box sx={{flex:1, overflow:'auto', p:1}}>
                <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
                    <Input
                        fullWidth
                        placeholder="package name"
                        value={pipPackageName}
                        onChange={(ev)=>setPipPackageName(ev.target.value)}
                        onKeyDown={(ev)=>{
                            if (ev.key === 'Enter') {
                                installPipPackage();
                            }
                        }}
                    />
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        onClick={installPipPackage}
                        loading={pipInstalling}
                        loadingIndicator={<Loading size={18} value={100} thickness={4}/>}
                        disabled={!pipPackageName.trim() || pipRemoving}
                    >
                        Install
                    </Button>
                    <Typography variant="caption" color="text.secondary">
                        Only universal wheels are supported.
                    </Typography>
                    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mt:1}}>
                        <Typography variant="caption" color="text.secondary">
                            Installed ()
                        </Typography>
                        <Tooltip title="Refresh" arrow placement="right">
                            <span>
                                <IconButton
                                    size="small"
                                    onClick={loadInstalledPackages}
                                    disabled={pipInstalledLoading}
                                    aria-label="refresh installed packages"
                                >
                                    <RefreshIcon fontSize="inherit" />
                                </IconButton>
                            </span>
                        </Tooltip>
                    </Box>
                    <Paper variant="outlined" sx={{p:1, backgroundColor:'rgba(0,0,0,0.15)'}}>
                        {
                            pipInstalledLoading ?
                            <Typography variant="body2" color="text.secondary">
                                Loading...
                            </Typography>
                            : pipInstalled.length === 0 ?
                            <Typography variant="body2" color="text.secondary">
                                No packages are installed.
                            </Typography>
                            :
                            <Box sx={{display:'flex', flexDirection:'column', gap:0.5}}>
                                {
                                    pipInstalled.map((p) => (
                                        <Box key={p.name} sx={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:1}}>
                                            <Typography variant="body2" sx={{lineHeight:1.4}}>
                                                {p.name}{p.version ? `==${p.version}` : ""}
                                            </Typography>
                                            <Tooltip title="Uninstall" arrow placement="left">
                                                <span>
                                                    <IconButton
                                                        size="small"
                                                        onClick={() => uninstallPipPackage(p.name)}
                                                        disabled={pipInstalling || pipRemoving}
                                                        aria-label={`uninstall ${p.name}`}
                                                    >
                                                        <DeleteIcon fontSize="inherit" />
                                                    </IconButton>
                                                </span>
                                            </Tooltip>
                                        </Box>
                                    ))
                                }
                            </Box>
                        }
                    </Paper>
                </Box>
            </Box>
        </Paper>

    )
}