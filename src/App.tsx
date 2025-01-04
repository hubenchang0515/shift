import { useCallback, useEffect, useRef, useState } from 'react'
import { Box } from '@mui/material'
import HighlightEditor from './components/HighlightEditor'
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';

// @ts-ignore
import Module from './lua/lua.js';

function App() {
    const editRef = useRef<HTMLDivElement>(null);
    const termDivRef = useRef<HTMLDivElement>(null);
    const termRef = useRef<Terminal>();
    const [code, setCode] = useState<string>("");

    const writeTerm = (asciiCode:any) => {
        switch (asciiCode) {
            case 10: termRef.current?.write('\r\n'); break;
            case 13: termRef.current?.write('\r\n'); break;
            case 127: termRef.current?.write('\b \b'); break;
            default: termRef.current?.write(String.fromCharCode(asciiCode));
        }
    }

    const execute = (args:any[]) => {
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
    }

    useEffect(() => {
        console.log("Effect");
        if (!termDivRef.current || !editRef.current) {
            return;
        }

        // 初始化 xterm
        termRef.current = new Terminal();
        termRef.current?.open(termDivRef.current);

        // 打印 Lua 版本
        execute(["-v", "-e", "print('Press <Ctrl> + <S> to run')"]);

        return () => {
            termRef.current?.dispose();
            termRef.current = undefined;
        }
    }, [editRef.current, termDivRef.current]);

    const run = useCallback((event:KeyboardEvent) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            termRef.current?.reset();
            execute(["/tmp/main.lua"]);
        }
        
    }, [code]);

    useEffect(() => {
        // 绑定按键事件
        document.addEventListener("keydown", run);

        return () => {
            document.removeEventListener("keydown", run);
        }
    }, [run]);

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <HighlightEditor ref={editRef} language='lua' sx={{position:'relative', overflow:'auto', flexGrow:1, flexShrink: 1}} onChange={(text)=>setCode(text)}/>
            <div ref={termDivRef}></div>
        </Box>
    )
}

export default App
