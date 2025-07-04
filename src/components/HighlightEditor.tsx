import { Box, SxProps, Theme } from "@mui/material";
import hljs from "highlight.js";
import { CSSProperties, KeyboardEvent, Ref, useEffect, useImperativeHandle, useRef, useState } from "react";
import '../assets/font.css';
import '../assets/highlight.css';
import React from "react";

export function listLanguages() {
    return hljs.listLanguages();
}

export interface HighlightEditorProps {
    language: string;
    text?: string;
    onChange?: (text:string)=>void;
    sx?: SxProps<Theme>;
}

export function HighlightEditor(props:HighlightEditorProps, ref?:Ref<HTMLDivElement|null>) {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const displayRef = useRef<HTMLDivElement>(null);
    const [code, setCode] = useState<string>(" ");

    useImperativeHandle(ref, () => displayRef.current);

    // 生成高亮
    const highlight = (text:string) => {
        if (hljs.getLanguage(props.language)) {
            const result = hljs.highlight(text, {language:props.language, ignoreIllegals:true});
            setCode(result.value);
        } else {
            const result = hljs.highlightAuto(text);
            setCode(result.value);
        }
    }

    // 输入响应
    const refresh = () => {
        if (!inputRef.current) {
            return;
        }

        const text = inputRef.current.value;
        props.onChange?.(text);
        highlight(text);
    }

    // 处理 Tab 等特殊按键
    const onKeyDown = (ev:KeyboardEvent<HTMLTextAreaElement>) => {
        if (ev.key === 'Tab') {
            if (!inputRef.current) {
                return;
            }
            
            ev.preventDefault();
            const start = inputRef.current.selectionStart;
            const end =  inputRef.current.selectionEnd;
            inputRef.current.value = inputRef.current.value.substring(0, start) + "    " + inputRef.current.value.substring(end);
            inputRef.current.selectionStart = start + 4;
            inputRef.current.selectionEnd = start + 4;
            refresh();
            return;
        }
    }

    // props.text 变化，修改内容
    useEffect(() => {
        if (props.text && inputRef.current) {
            inputRef.current.value = props.text;
            refresh();
        }
    }, [props.text]);

    // props.language 变化，重新高亮
    useEffect(() => {
        refresh();
    }, [props.language])

    useEffect(() => {
        inputRef.current?.focus({preventScroll:true});
    }, [inputRef])

    const commonStyle:CSSProperties = {
        margin: 0,
        padding: 12,
        boxSizing: 'border-box',
        overflow: 'auto',
        fontSize: '16px',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        wordSpacing: 'normal',
    }

    return (
        <Box 
            className={`language-${props.language} hljs`} 
            sx={props.sx ?? { position: 'relative', width: '100%', overflow:'auto'}}
        >
            <div 
                ref={displayRef}
                className={`language-${props.language} hljs code-font`} 
                style={{
                    ...commonStyle,
                    width: '100%', 
                    height: '100%',
                    zIndex: 1,
                }}
            >
                <pre 
                    className="code-font"
                    style={{
                        margin: 0,
                        padding: 0,
                    }}
                    dangerouslySetInnerHTML={{__html: code + " "}}
                />
            </div>

            <textarea
                aria-label="code"
                className="code-font"
                ref={inputRef}
                style={{
                    ...commonStyle,
                    position:"absolute", 
                    top: 0, 
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    color: 'transparent',
                    background: 'transparent',
                    caretColor: '#0f0',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    whiteSpace: 'pre',
                    scrollbarGutter: 'stable',
                }}
                wrap="soft"
                spellCheck="false"
                autoFocus={false}
                onChange={refresh}
                onKeyDown={onKeyDown}
                onScroll={() => {
                    if (displayRef.current && inputRef.current) {
                        displayRef.current.scrollTop = inputRef.current.scrollTop;
                        displayRef.current.scrollLeft = inputRef.current.scrollLeft;
                    }
                }}
            />
        </Box>
    );
}

export default React.forwardRef(HighlightEditor);