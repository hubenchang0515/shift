export function wrapFetch(init?:RequestInit) {
    const originalFetch = window.fetch

    window.fetch = function(originInput: RequestInfo | URL, originInit?: RequestInit) {

        const finalInit = {...init, ...originInit};

        // 注意：不能修改 Request 对象的 mode
        return originalFetch(originInput, finalInit);
    }

    return originalFetch;
}