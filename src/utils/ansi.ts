export function createRgb(text:string, r:number, g:number, b:number) {
    return `\x1b[38;2;${r};${g};${b}m${text}\x1b[0m`;
}

export function createLink(text:string, url:string) {
    return `\x1b]8;;${url}\x07${text}\x1b]8;;\x07`;
}