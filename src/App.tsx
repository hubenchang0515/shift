import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Button, FormControl, MenuItem, Paper, Select, Tooltip } from '@mui/material'
import HighlightEditor from './components/HighlightEditor'
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import GitHubButton from 'react-github-btn'

// @ts-ignore
import lua from './wasm/lua.js';
// @ts-ignore
import picoc from './wasm/picoc.js';

const LANGUAGES = [
    {
        name: "lua",
        label: "Lua",
        interpreter: lua,
    },

    {
        name: "c",
        label: "C",
        interpreter: picoc,
    },
]

function App() {
    const editRef = useRef<HTMLDivElement>(null);
    const termDivRef = useRef<HTMLDivElement>(null);
    const termRef = useRef<Terminal>();

    const [language, setLanguage] = useState<string>("c");
    const [code, setCode] = useState<string>("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const lang = params.get("lang");
        const base64Code = params.get("code");

        if (lang) {
            setLanguage(lang);
        }

        if (base64Code) {
            setCode(decodeURIComponent(atob(base64Code)));
        }
    }, []);

    const share = useCallback(() => {
        const url = new URL(window.location.href);
        url.searchParams.set("lang", language);
        if (code) {
            url.searchParams.set("code", btoa(encodeURIComponent(code)));
        }
        navigator.clipboard.writeText(url.toString());
    }, [language, code]);

    const writeTerm = useCallback((asciiCode:any) => {
        switch (asciiCode) {
            case 10: termRef.current?.write('\r\n'); break;
            case 13: termRef.current?.write('\r\n'); break;
            case 127: termRef.current?.write('\b \b'); break;
            default: termRef.current?.write(String.fromCharCode(asciiCode));
        }
    }, [termRef.current]);

    const execute = useCallback((args:any[]) => {
        console.log(language)
        let interpreter = null;
        for (const lang of LANGUAGES) {
            if (lang.name === language) {
                interpreter = lang.interpreter;
                break
            }
        }
        interpreter({
            arguments: args,
            preRun: function(module:any) {
                module.FS.writeFile(`/tmp/code`, code);

                function stdin() {
                    return null;
                }

                function stdout(asciiCode:any) {
                    writeTerm(asciiCode);
                }

                function stderr(asciiCode:any) {
                    writeTerm(asciiCode);
                }

                module.FS.init(stdin, stdout, stderr);
            }
        });
    }, [language, code, writeTerm]);

    useEffect(() => {
        if (!termDivRef.current || termRef.current) {
            return;
        }

        // 初始化 xterm
        termRef.current = new Terminal({convertEol: true});
        termRef.current?.open(termDivRef.current);
        termRef.current.resize(Math.floor(termDivRef.current.clientWidth/9),  15);

        termRef.current?.writeln(`Copyright (c) ${new Date().getFullYear()} Plan C`);
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
            <div ref={termDivRef}></div>
            <Box sx={{position:'fixed', bottom:8, right:16, zIndex:20, display:'flex', flexDirection:'column', gap:1}}>
                <GitHubButton href="https://github.com/hubenchang0515/shift" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star hubenchang0515/shift on GitHub">Star</GitHubButton>
                <Paper>
                <FormControl fullWidth variant="standard">
                    <Select
                        value={language}
                        onChange={(ev)=>setLanguage(ev.target.value)}
                        sx={{paddingX:1}}
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
        </Box>
    )
}

export default App
