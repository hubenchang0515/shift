import { useCallback, useEffect, useRef, useState } from 'react'
import { Alert, AlertProps, Box, Button, Collapse, createTheme, CssBaseline, FormControl, IconButton, Input, InputAdornment, MenuItem, Paper, Select, Snackbar, ThemeProvider, Tooltip, Typography } from '@mui/material'
import HighlightEditor from './components/HighlightEditor'
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RefreshIcon from '@mui/icons-material/Refresh';
import TerminalIcon from '@mui/icons-material/Terminal';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DeleteIcon from '@mui/icons-material/Delete';
import './assets/font.css';
import { blue, pink } from '@mui/material/colors';
import Loading from './components/Loading';
import { wrapFetch } from './utils/fetch';
import { installFromPyPI, uninstallFromPyPI } from './utils/webpip';
import { createPypiProxyFetch } from './utils/pypiProxy';

// @ts-ignore
import lua from './wasm/lua.js';
// @ts-ignore
import picoc from './wasm/picoc.js';
// @ts-ignore
import python from './wasm/python.js';
// @ts-ignore
import ruby from './wasm/ruby.js';
// @ts-ignore
import chibi from './wasm/chibi.js';
// @ts-ignore
import bash from './wasm/bash.js';
// @ts-ignore
import qjs from './wasm/qjs.js';

const PYTHON_VERSION = "3.13.1+";
const proxyFetch = createPypiProxyFetch();

const LANGUAGES = [
    {
        name: "python",
        label: "Python",
        interpreter: python,
        arguments: [],
    },

    {
        name: "javascript",
        label: "JavaScript",
        interpreter: qjs,
        arguments: [],
    },

    {
        name: "lua",
        label: "Lua",
        interpreter: lua,
        arguments: [],
    },

    {
        name: "bash",
        label: "Bash",
        interpreter: bash,
        arguments: [],
    },

    {
        name: "ruby",
        label: "Ruby",
        interpreter: ruby,
        arguments: ["--disable-gems"],
    },

    {
        name: "scheme",
        label: "Scheme",
        interpreter: chibi,
        arguments: [],
    },

    {
        name: "c",
        label: "C",
        interpreter: picoc,
        arguments: [],
    },
]

function App() {
    const [ready, setReady] = useState(false);
    const editRef = useRef<HTMLDivElement>(null);
    const termDivRef = useRef<HTMLDivElement>(null);
    const [terminal, setTerminal] = useState<Terminal|null>(null);

    const [language, setLanguage] = useState<string>("python");
    const [code, setCode] = useState<string>("");
    const [input, setInput] = useState<string>("");
    const [open, setOpen] = useState(true);

    const [pipPanelOpen, setPipPanelOpen] = useState(true);
    const [pipPackageName, setPipPackageName] = useState<string>("");
    const [pipInstalling, setPipInstalling] = useState(false);
    const [pipRemoving, setPipRemoving] = useState(false);
    const [pipStatus, setPipStatus] = useState<string>("");
    const [pipInstalled, setPipInstalled] = useState<Array<{name:string; version?:string}>>([]);
    const [pipInstalledLoading, setPipInstalledLoading] = useState(false);

    const pipInstallerModuleRef = useRef<any>(null);
    const pipInstallerModulePromiseRef = useRef<Promise<any> | null>(null);

    const [message, setMessage] = useState("");
    const [messageSeverity, setMessageSeverity] = useState<AlertProps['severity']>('error');
    const [messageOpen, setMessageOpen] = useState(false);

    const [running, setRunning] = useState(false);

    const [firstRun, setFirstRun] = useState(false);

    // 设置 noindex
    useEffect(() => {
        if (window.location.hash || window.location.search) {
            const meta = document.createElement("meta");
            meta.name = 'robots';
            meta.content = 'noindex';
            const head = document.querySelector('head');
            head?.appendChild(meta);

            return () => {
                meta.remove();
            }
        }
    }, []);

    // 复制分享链接
    const share = useCallback(() => {
        const params = new URLSearchParams({
            lang: language,
        });

        if (input) {
            params.set("input", btoa(encodeURIComponent(input)));
        }

        if (code) {
            params.set("code", btoa(encodeURIComponent(code)));
        }
        const url = new URL(window.location.pathname, window.location.origin);
        url.search = params.toString();
            
        if (navigator?.clipboard?.writeText) {
            navigator.clipboard.writeText(url.toString()).then(() => {
                setMessageSeverity("success");
                setMessage("Code URL copied.");
                setMessageOpen(true);
            });
        } else {
            setMessageSeverity("error");
            setMessage("Code URL copy failed.");
            setMessageOpen(true);
        }
    }, [language, input, code]);

    const locateWasmFile = useCallback((path: string, scriptDirectory: string) => {
        if (path.endsWith(".data") || path.endsWith(".wasm")) {
            return import.meta.env.BASE_URL + "wasm/" + path;
        }
        return scriptDirectory + path;
    }, []);

    const ensurePythonPackages = useCallback((module: any, populate: boolean) => {
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
    }, []);

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
        if (language !== "python") return;

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
            setMessageSeverity("error");
            setMessage(err?.message ?? "Failed to load installed packages.");
            setMessageOpen(true);
        } finally {
            setPipInstalledLoading(false);
        }
    }, [getPipInstallerModule, language, syncfs]);

    const installPipPackage = useCallback(async () => {
        if (language !== "python") return;
        if (pipRemoving) return;
        const name = pipPackageName.trim();
        if (!name) return;

        setPipInstalling(true);
        setPipStatus("");
        try {
            const module = await getPipInstallerModule();

            if (!module?.FS?.filesystems?.IDBFS) {
                setMessageSeverity("error");
                setMessage("IDBFS not available; packages will not persist.");
                setMessageOpen(true);
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
                    setPipStatus(msg);
                    terminal?.write(`${msg}\n`);
                },
            });

            if (module?.FS?.filesystems?.IDBFS) {
                await syncfs(module, false);
            }

            setMessageSeverity("success");
            setMessage(`Installed: ${name}`);
            setMessageOpen(true);
            loadInstalledPackages();
        } catch (err: any) {
            setMessageSeverity("error");
            setMessage(err?.message ?? "Install failed.");
            setMessageOpen(true);
        } finally {
            setPipInstalling(false);
        }
    }, [getPipInstallerModule, language, pipPackageName, pipRemoving, syncfs, terminal, loadInstalledPackages]);

    const uninstallPipPackage = useCallback(async (pkgName: string) => {
        if (language !== "python") return;
        if (pipInstalling || pipRemoving) return;
        const name = pkgName.trim();
        if (!name) return;

        setPipRemoving(true);
        setPipStatus("");
        try {
            const module = await getPipInstallerModule();

            if (!module?.FS?.filesystems?.IDBFS) {
                setMessageSeverity("error");
                setMessage("IDBFS not available; packages will not persist.");
                setMessageOpen(true);
            }

            await syncfs(module, true);

            await uninstallFromPyPI({
                module,
                name,
                destRoot: "/packages",
                withDeps: true,
                onProgress: (msg) => {
                    setPipStatus(msg);
                    terminal?.write(`${msg}\n`);
                },
            });

            if (module?.FS?.filesystems?.IDBFS) {
                await syncfs(module, false);
            }

            setMessageSeverity("success");
            setMessage(`Uninstalled: ${name}`);
            setMessageOpen(true);
            loadInstalledPackages();
        } catch (err: any) {
            setMessageSeverity("error");
            setMessage(err?.message ?? "Uninstall failed.");
            setMessageOpen(true);
        } finally {
            setPipRemoving(false);
        }
    }, [getPipInstallerModule, language, loadInstalledPackages, pipInstalling, pipRemoving, syncfs, terminal]);

    useEffect(() => {
        if (language === "python") {
            loadInstalledPackages();
        }
    }, [language, loadInstalledPackages]);

    // 运行代码
    const execute = useCallback((args:any[]) => {
        let interpreter = null;
        let preargs:string[] = [];
        for (const lang of LANGUAGES) {
            if (lang.name === language) {
                interpreter = lang.interpreter;
                preargs = lang.arguments;
                break
            }
        }

        if (interpreter === null) {
            terminal?.write(`不支持运行 ${language}`)
        }
        setRunning(true);

        const task = () => {
            let output:number[] = []
            const config:any = {
                arguments: [...preargs, ...args],
                locateFile: locateWasmFile,
                preRun: [
                    (module:any) => {
                        if (language === "python") {
                            ensurePythonPackages(module, true);
                        }
                        module.FS.writeFile(`/tmp/code`, code);
                        const encoder = new TextEncoder();
                        let bytes = encoder.encode(input);
                        let i = 0;

                        // 如果首次调用 stdin 就返回 null，则立即结束输入
                        // 如果首次调用 stdin 时返回了数据，则需要返回两次 null 才能结束输入
                        // 原因不明
                        function stdin() {
                            // 如果没有数据，则通过 window.prompt() 请求输入
                            if (bytes.length === 0) {
                                const lines = new TextDecoder('utf-8').decode(new Uint8Array(output)).split('\n');
                                const msg = lines.length > 0 ? lines[lines.length - 1] : "STDIN"
                                bytes = encoder.encode(window.prompt(msg)??"");
                            }

                            if (i < bytes.length) {
                                const utf8Code = bytes[i];
                                output.push(utf8Code)
                                i += 1;
                                return utf8Code
                            } else if (i == bytes.length) {
                                output.push(10);
                                i += 1;
                                return null;
                            } else {
                                bytes = new Uint8Array();
                                i = 0;
                                return null; // 第二次返回 null
                            }
                        }

                        function stdout(utf8Code:number) {
                            output.push(utf8Code);
                        }

                        function stderr(utf8Code:number) {
                            output.push(utf8Code);
                        }

                        module.FS.init(stdin, stdout, stderr);
                    }
                ],

                postRun: [
                    () => {
                        terminal?.write(new Uint8Array(output));
                        setRunning(false);
                    }
                ],
            };

            if (language === "python") {
                config.ENV = {
                    PYTHONPATH: "/packages",
                };
            }

            const result = interpreter?.(config);
            if (result && typeof result.then === "function") {
                result.catch((err:any) => {
                    terminal?.write(String(err) + "\n");
                    setRunning(false);
                });
            }
        };

        queueMicrotask(task);
    }, [terminal, language, code, input, locateWasmFile, ensurePythonPackages]);

    // 带参数的 URL 初始化
    useEffect(() => {
        let paramsString = ""
        if (window.location.hash) {
            paramsString = window.location.hash.substring(1)
        } else if (window.location.search) {
            paramsString = window.location.search;
        }

        const params = new URLSearchParams(paramsString);
        const lang = params.get("lang");
        const base64Input = params.get("input");
        const base64Code = params.get("code");

        if (lang) {
            setLanguage(lang);
        }

        if (base64Input) {
            setInput(decodeURIComponent(atob(base64Input)));
        }

        if (base64Code) {
            setCode(decodeURIComponent(atob(base64Code)));
            setFirstRun(true);
        }
    }, []);

    // 等待字体加载完成
    useEffect(() => {
        document.fonts.ready.then(()=>{setReady(true)});
    }, []);

    // 初始运行
    useEffect(() => {
        if (!ready || !firstRun || !terminal) {
            return;
        }

        execute(["/tmp/code"]);
        setFirstRun(false);
    }, [ready, firstRun, terminal, execute]);

    // 初始化
    useEffect(() => {
        if (!ready || !termDivRef.current) {
            return;
        }

        // 初始化 xterm
        const term = new Terminal({
            convertEol: true, 
            rows:15, 
            allowProposedApi: true, 
            fontFamily:'"Maple Mono CN", Consolas, Monaco, monospace',
            letterSpacing: 0,
        });

        term.attachCustomKeyEventHandler(()=>false); // xterm 不处理快捷键

        const fitAddon = new FitAddon();
        term.loadAddon(fitAddon);
        term.loadAddon(new WebLinksAddon());
        term.open(termDivRef.current);
        fitAddon.fit();

        term.write(new Uint8Array([27, 91, 51, 56, 59, 50, 59, 49, 48, 50, 59, 50, 48, 52, 59, 50, 53, 53, 109]));
        term.write(`Copyright (c) ${new Date().getFullYear()} Plan C (https://xplanc.org)\n`);
        term.write(`See help in ${window.location.origin}${import.meta.env.BASE_URL}usage.html`);
        term.write(new Uint8Array([27, 91, 48, 109, 10]));
        setTerminal(term);

        // 封装 fetch
        const originalFetch = wrapFetch({mode: 'cors'});

        return () => {
            term.dispose();
            window.fetch = originalFetch;
        }
    }, [ready]);

    const onKey = useCallback((event:KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            execute(["/tmp/code"]);
        }

        if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
            event.preventDefault();
            terminal?.reset();
        }
        
    }, [execute]);

    useEffect(() => {
        // 绑定按键事件
        document.addEventListener("keydown", onKey);

        return () => {
            document.removeEventListener("keydown", onKey);
        }
    }, [onKey]);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: blue,
            secondary: pink
        },
    });

    const showPipPanel = language === "python";
    const pipPanelWidth = 280;

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Snackbar
                    color='success'
                    open={messageOpen}
                    autoHideDuration={2000}
                    onClose={()=>setMessageOpen(false)}
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                >
                    <Alert severity={messageSeverity}>
                        {message}
                    </Alert>
                </Snackbar>
                <Box sx={{flex:1, display:'flex', minHeight:0}}>
                    {
                        showPipPanel ?
                        <Box sx={{height:'100%', display:'flex', flexShrink:0}}>
                            <Collapse in={pipPanelOpen} orientation="horizontal" sx={{display:'flex'}}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        width: pipPanelWidth,
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
                                        <Typography variant="subtitle2">pip packages</Typography>
                                        <Tooltip title="Collapse" arrow placement="right">
                                            <IconButton
                                                size="small"
                                                onClick={() => setPipPanelOpen(false)}
                                                aria-label="collapse pip packages"
                                            >
                                                <KeyboardArrowLeftIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>

                                    <Box sx={{flex:1, overflow:'auto', p:1}}>
                                        <Box sx={{display:'flex', flexDirection:'column', gap:1}}>
                                            <Input
                                                fullWidth
                                                placeholder="包名，例如 faker"
                                                value={pipPackageName}
                                                onChange={(ev)=>setPipPackageName(ev.target.value)}
                                                onKeyDown={(ev)=>{
                                                    if (ev.key === 'Enter') {
                                                        installPipPackage();
                                                    }
                                                }}
                                            />
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={installPipPackage}
                                                loading={pipInstalling}
                                                loadingIndicator={<Loading size={18} value={100} thickness={4}/>}
                                                disabled={!pipPackageName.trim() || pipRemoving}
                                            >
                                                安装
                                            </Button>
                                            {
                                                pipStatus ?
                                                <Typography variant="caption" color="text.secondary">
                                                    {pipStatus}
                                                </Typography>
                                                : <></>
                                            }
                                            <Typography variant="caption" color="text.secondary">
                                                仅支持 universal wheel（`*-py3-none-any.whl`）。
                                            </Typography>

                                            <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', mt:1}}>
                                                <Typography variant="caption" color="text.secondary">
                                                    已安装 ({pipInstalled.length})
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
                                                        No packages installed.
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
                            </Collapse>

                            {
                                pipPanelOpen ? <></> :
                                <Box
                                    sx={{
                                        height: '100%',
                                        backgroundColor: '#2E3440',
                                        borderRight: '1px solid rgba(255,255,255,0.12)',
                                        pt: 0.75,
                                        px: 0.5,
                                    }}
                                >
                                    <Tooltip title="pip packages" arrow placement="right">
                                        <IconButton
                                            size="small"
                                            onClick={() => setPipPanelOpen(true)}
                                            aria-label="expand pip packages"
                                        >
                                            <KeyboardArrowRightIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            }
                        </Box>
                        :
                        <></>
                    }

                    <Box sx={{display:'flex', flexDirection:'column', flex:1, minWidth:0}}>
                        <HighlightEditor
                            ref={editRef}
                            language={language}
                            sx={{position:'relative', overflow:'auto', flex:1, minHeight:0}}
                            text={code}
                            onChange={(text)=>setCode(text)}
                        />
                        <Box sx={{position:'relative', zIndex:10}}>
                            <div ref={termDivRef} className='code fix-xterm' style={{background:'#000', height:300}}></div>
                            <Box sx={{position:'absolute', bottom:8, right:8, display:'flex', flexDirection:'column'}}>
                                <IconButton onClick={()=>{setOpen(!open)}} sx={{color:'#fff', alignSelf:'center'}} aria-label="collapse">
                                    {open ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
                                </IconButton>
                                <Collapse in={open}>
                                    <Box sx={{display:'flex', flexDirection:'column', gap:1, alignSelf:'flex-end'}}>
                                        <Button size='small' variant='contained' color='inherit' aria-label='github' href='https://github.com/hubenchang0515/shift' target='_blank'><GitHubIcon/></Button>
                                        <Paper>
                                        <FormControl fullWidth variant="standard">
                                            <Select
                                                value={language}
                                                onChange={(ev)=>setLanguage(ev.target.value)}
                                                sx={{paddingX:1, minWidth:'8em'}}
                                                inputProps={{
                                                    "aria-label": "language"
                                                }}
                                            >
                                                {
                                                    LANGUAGES.map((item, index) => {
                                                        return <MenuItem key={index} value={item.name}>{item.label}</MenuItem>
                                                    })
                                                }

                                                {
                                                    LANGUAGES.some(item=>item.name===language) ? <></> :
                                                    <MenuItem key={language} value={language}>{language}</MenuItem>
                                                }
                                            </Select>
                                        </FormControl>
                                        </Paper>
                                        <Button variant='contained' color='inherit' disabled={!navigator?.clipboard?.writeText} onClick={share}>SHARE</Button>
                                        <Tooltip title="Ctrl + L" arrow placement='left'>
                                            <Button size='small' variant='contained' color='secondary' onClick={()=>{terminal?.reset();}}>CLEAR</Button>
                                        </Tooltip>
                                        <Tooltip title="Ctrl + S"arrow placement='left'>
                                            <Button 
                                                size='small' 
                                                variant='contained' 
                                                onClick={()=>{execute(["/tmp/code"]);}} 
                                                loading={running}
                                                loadingIndicator={<Loading size={20} value={100} thickness={4}/>}
                                            >
                                                RUN
                                            </Button>
                                        </Tooltip>
                                    </Box>
                                </Collapse>
                            </Box>
                        </Box>
                        <Input 
                            fullWidth 
                            sx={{
                                backgroundColor: 'white',
                                color: 'black',
                                borderTop: '1px solid white',
                            }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <TerminalIcon sx={{color:'black'}}/>
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton  aria-label="run" onClick={() => execute(["/tmp/code"])}>
                                        <KeyboardReturnIcon sx={{color:'black'}}/>
                                    </IconButton>
                                </InputAdornment>
                            }
                            placeholder='STDIN'
                            value={input} 
                            onChange={(ev)=>{
                                setInput(ev.target.value);
                            }}
                            onKeyDown={(ev)=>{
                                if (ev.key === 'Enter') {
                                    execute(["/tmp/code"]);
                                }
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App
