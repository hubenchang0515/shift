const CORS_ANYWHERE_BASE = "https://cors-anywhere.herokuapp.com/";
const CORS_ANYWHERE_AUTH_URL = "https://cors-anywhere.herokuapp.com/corsdemo";

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  res.statusCode = 410;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(
    JSON.stringify({
      error: "Local proxy disabled. Use cors-anywhere instead.",
      corsAnywhere: CORS_ANYWHERE_BASE,
      authUrl: CORS_ANYWHERE_AUTH_URL,
    }),
  );
}
