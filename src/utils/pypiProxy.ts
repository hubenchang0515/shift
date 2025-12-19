import type { ProxyFetch } from "./webpip";

export const CORS_ANYWHERE_PREFIX = "https://cors-anywhere.herokuapp.com/";
export const CORS_ANYWHERE_AUTH_URL = "https://cors-anywhere.herokuapp.com/corsdemo";

const CORS_ANYWHERE_AUTH_HINT = `CORS Anywhere requires authorization. Visit ${CORS_ANYWHERE_AUTH_URL} and retry.`;

async function needsCorsAnywhereAuth(resp: Response): Promise<boolean> {
  if (resp.status !== 403) return false;
  try {
    const text = await resp.clone().text();
    const lower = text.toLowerCase();
    return lower.includes("cors-anywhere") || lower.includes("corsdemo");
  } catch {
    return true;
  }
}

export function createPypiProxyFetch(): ProxyFetch {
  return async (url: string, init?: RequestInit) => {
    const headers = new Headers(init?.headers);
    headers.set("X-Requested-With", "XMLHttpRequest");

    try {
      const resp = await fetch(`${CORS_ANYWHERE_PREFIX}${url}`, {
        ...init,
        headers,
      });

      if (await needsCorsAnywhereAuth(resp)) {
        throw new Error(CORS_ANYWHERE_AUTH_HINT);
      }

      return resp;
    } catch (err: any) {
      if (err?.message?.includes(CORS_ANYWHERE_AUTH_URL)) {
        throw err;
      }
      const detail = err?.message ? ` (${err.message})` : "";
      throw new Error(`CORS Anywhere request failed${detail}. ${CORS_ANYWHERE_AUTH_HINT}`);
    }
  };
}
