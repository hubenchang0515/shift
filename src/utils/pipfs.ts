export function mountPipPackages(module: any, populate: boolean) {
        const FS = module.FS;
        FS.mkdirTree("/packages");

        const IDBFS = FS.filesystems?.IDBFS;
        if (IDBFS) {
            try {
                FS.mount(IDBFS, {}, "/packages");
            } catch {
                // ignore mount errors (e.g. already mounted)
            }

            const depId = `idbfs:${populate}:${Date.now()}`;
            module.addRunDependency?.(depId);
            try {
                FS.syncfs(populate, (err: any) => {
                    if (err) {
                        console.error(err);
                    }
                    module.removeRunDependency?.(depId);
                });
            } catch (err) {
                console.error(err);
                module.removeRunDependency?.(depId);
            }
        }

        try {
            FS.mkdirTree("/usr/local/lib/python3.13");
            FS.writeFile(
                "/usr/local/lib/python3.13/sitecustomize.py",
                "import sys\nsys.path.insert(0, '/packages')\n",
            );
        } catch (err) {
            console.error(err);
        }
    }