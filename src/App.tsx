import { useCallback, useEffect, useRef, useState } from 'react'
import { Box, Button, Tooltip } from '@mui/material'
import HighlightEditor from './components/HighlightEditor'
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import GitHubButton from 'react-github-btn'

// @ts-ignore
import Module from './lua/lua.js';

function App() {
    const editRef = useRef<HTMLDivElement>(null);
    const termDivRef = useRef<HTMLDivElement>(null);
    const termRef = useRef<Terminal>();
    const [code, setCode] = useState<string>("");

    const writeTerm = useCallback((asciiCode:any) => {
        switch (asciiCode) {
            case 10: termRef.current?.write('\r\n'); break;
            case 13: termRef.current?.write('\r\n'); break;
            case 127: termRef.current?.write('\b \b'); break;
            default: termRef.current?.write(String.fromCharCode(asciiCode));
        }
    }, [termRef.current]);

    const execute = useCallback((args:any[]) => {
        Module({
            arguments: args,
            preRun: function(module:any) {
                module.FS.writeFile('/tmp/main.lua', code);

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
    }, [code, writeTerm]);

    useEffect(() => {
        if (!termDivRef.current || termRef.current) {
            return;
        }

        // 初始化 xterm
        termRef.current = new Terminal({convertEol: true});
        termRef.current?.open(termDivRef.current);
        termRef.current.resize(Math.floor(termDivRef.current.clientWidth/9),  15);

        // 打印 Lua 版本
        execute(["-v"]);
    }, [termDivRef.current]);

    const onKey = useCallback((event:KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            execute(["/tmp/main.lua"]);
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
            <HighlightEditor ref={editRef} language='lua' sx={{position:'relative', overflow:'auto', flex:1}} onChange={(text)=>setCode(text)}/>
            <div ref={termDivRef}></div>
            <Box sx={{position:'fixed', bottom:8, right:8, zIndex:20, display:'flex', flexDirection:'column', gap:1}}>
                <GitHubButton href="https://github.com/hubenchang0515/lua-online" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star hubenchang0515/lua-online on GitHub">Star</GitHubButton>
                <Tooltip title="Ctrl + L" arrow placement='left'>
                    <Button size='small' variant='contained' color='secondary' onClick={()=>{termRef.current?.reset();}}>CLEAR</Button>
                </Tooltip>
                <Tooltip title="Ctrl + S"arrow placement='left'>
                    <Button size='small' variant='contained' onClick={()=>{execute(["/tmp/main.lua"]);}}>RUN</Button>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default App
