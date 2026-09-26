// A small web app for trying Caster end to end. No dependencies: Node's own
// HTTP server, one page, and a health check.
import { createServer } from "node:http";

const port = Number(process.env.PORT ?? 8080);
const started = new Date();

const page = () => `<!doctype html>
<html lang="en">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Demo app</title>
<style>
  body { font: 18px/1.5 system-ui, sans-serif; max-width: 36rem; margin: 4rem auto; padding: 0 1rem; color: #2b2622; background: #fbf6ec; }
  h1 { font-size: 1.8rem; margin: 0 0 .5rem; }
  p { margin: 0 0 1rem; }
</style>
<h1>It's online.</h1>
<p>This is a small demo app. If you can read this, Caster built it from its repository and put it live.</p>
<p>Running since ${started.toUTCString()}.</p>
</html>`;

createServer((req, res) => {
  const { pathname } = new URL(req.url ?? "/", "http://localhost");
  if (pathname === "/healthz") {
    res.writeHead(200, { "content-type": "text/plain" }).end("ok\n");
  } else if (pathname === "/") {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" }).end(page());
  } else {
    res.writeHead(404, { "content-type": "text/plain" }).end("Not found\n");
  }
}).listen(port, () => console.log(`Listening on ${port}`));

// Stop cleanly when the platform asks, so a restart doesn't wait for a timeout.
process.on("SIGTERM", () => process.exit(0));
