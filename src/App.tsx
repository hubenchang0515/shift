import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Button, Collapse, FormControl, IconButton, Input, InputAdornment, MenuItem, Paper, Select, Tooltip } from '@mui/material'
import HighlightEditor from './components/HighlightEditor'
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { FitAddon } from '@xterm/addon-fit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import TerminalIcon from '@mui/icons-material/Terminal';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import GitHubIcon from '@mui/icons-material/GitHub';

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

const LANGUAGES = [
    {
        name: "python",
        label: "Python",
        interpreter: python,
        arguments: [],
    },

    {
        name: "lua",
        label: "Lua",
        interpreter: lua,
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
    const editRef = useRef<HTMLDivElement>(null);
    const termDivRef = useRef<HTMLDivElement>(null);
    const termRef = useRef<Terminal>();

    const [language, setLanguage] = useState<string>("python");
    const [code, setCode] = useState<string>("");
    const [input, setInput] = useState<string>("");
    const [open, setOpen] = useState(true);

    const share = useCallback(() => {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", language);
        if (input) {
            url.searchParams.set("input", btoa(encodeURIComponent(input)));
        }

        if (code) {
            url.searchParams.set("code", btoa(encodeURIComponent(code)));
        }
        navigator.clipboard.writeText(url.toString());
    }, [language, input, code]);

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
        let output:number[] = []
        interpreter({
            arguments: [...preargs, ...args],
            preRun: [
                (module:any) => {
                    module.FS.writeFile(`/tmp/code`, code);
                    const encoder = new TextEncoder();
                    const bytes = encoder.encode(input);
                    let i = 0;

                    function stdin() {
                        if (i < bytes.length) {
                            const utf8Code = bytes[i];
                            output.push(utf8Code)
                            i += 1;
                            return utf8Code
                        } else if (i == bytes.length) {
                            output.push(10);
                            i += 1;
                            return null
                        } else {
                            return null
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
                    termRef.current?.write(new Uint8Array(output));
                }
            ]
        });
    }, [language, code, input]);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
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
            execute(["/tmp/code"]);
        }
    }, [termDivRef.current]);

    useEffect(() => {
        if (!termDivRef.current || termRef.current) {
            return;
        }

        // 初始化 xterm
        termRef.current = new Terminal({convertEol: true, rows:15, fontFamily:"Fira Code, Noto Sans Mono CJK SC, Consolas, Monaco, monospace", allowProposedApi: true});
        const fitAddon = new FitAddon();
        termRef.current.loadAddon(fitAddon);
        termRef.current.open(termDivRef.current);
        fitAddon.fit();

        termRef.current.writeln(`Copyright (c) ${new Date().getFullYear()} Plan C`);
    }, [termDivRef.current]);

    const onKey = useCallback((event:KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            execute(["/tmp/code"]);
        }

        if ((event.ctrlKey || event.metaKey) && event.key === 'l') {
            event.preventDefault();
            termRef.current?.reset();
        }
        
    }, [execute]);

    useEffect(() => {
        // 绑定按键事件
        document.addEventListener("keydown", onKey);

        return () => {
            document.removeEventListener("keydown", onKey);
        }
    }, [onKey]);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <HighlightEditor ref={editRef} language={language} sx={{position:'relative', overflow:'auto', flex:1}} text={code} onChange={(text)=>setCode(text)}/>
            <Box sx={{position:'relative', zIndex:10}}>
                <div ref={termDivRef}></div>
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
                                    sx={{paddingX:1}}
                                    inputProps={{
                                        "aria-label": "language"
                                    }}
                                >
                                    {
                                        LANGUAGES.map((item, index) => {
                                            return <MenuItem key={index} value={item.name}>{item.label}</MenuItem>
                                        })
                                    }
                                </Select>
                            </FormControl>
                            </Paper>
                            <Button size='small' variant='contained' color='inherit' onClick={share}>SHARE</Button>
                            <Tooltip title="Ctrl + L" arrow placement='left'>
                                <Button size='small' variant='contained' color='secondary' onClick={()=>{termRef.current?.reset();}}>CLEAR</Button>
                            </Tooltip>
                            <Tooltip title="Ctrl + S"arrow placement='left'>
                                <Button size='small' variant='contained' onClick={()=>{execute(["/tmp/code"]);}}>RUN</Button>
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
    )
}

export default App
