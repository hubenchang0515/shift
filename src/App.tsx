import { useCallback, useEffect, useRef, useState } from 'react'
import { Alert, AlertProps, Box, Button, Collapse, createTheme, CssBaseline, FormControl, IconButton, Input, InputAdornment, MenuItem, Paper, Select, Snackbar, ThemeProvider, Tooltip } from '@mui/material'
import HighlightEditor from './components/HighlightEditor'
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { FitAddon } from '@xterm/addon-fit';
import { WebLinksAddon } from '@xterm/addon-web-links';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TerminalIcon from '@mui/icons-material/Terminal';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './assets/font.css';
import { blue, pink } from '@mui/material/colors';
import Loading from './components/Loading';
import { wrapFetch } from './utils/fetch';
import { createLink, createRgb } from './utils/ansi.js';

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
            interpreter?.({
                arguments: [...preargs, ...args],
                locateFile: (path:string, scriptDirectory:string) => {
                    if (path.endsWith(".data") || path.endsWith(".wasm")) {
                        return import.meta.env.BASE_URL + "wasm/" + path;
                    } else {
                        return scriptDirectory + path;
                    }
                },
                preRun: [
                    (module:any) => {
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
            });
        };

        queueMicrotask(task);
    }, [terminal, language, code, input]);

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
        
        term.write(createRgb(`Copyright (C) ${new Date().getFullYear()} `, 102, 204, 255));
        term.write(createRgb(createLink('Plan C', 'https://xplanc.org/'), 57, 197, 187));
        term.write(createRgb(`, See help `, 102, 204, 255));
        term.write(createRgb(createLink('here', `${window.location.origin}${import.meta.env.BASE_URL}usage.html`), 57, 197, 187));
        term.write(createRgb(`.\n`, 102, 204, 255));
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
                <HighlightEditor ref={editRef} language={language} sx={{position:'relative', overflow:'auto', flex:1}} text={code} onChange={(text)=>setCode(text)}/>
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
        </ThemeProvider>
    )
}

export default App
