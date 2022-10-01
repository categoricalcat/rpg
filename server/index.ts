import { createServer } from "http";
import { WebSocketServer } from "ws";
import serve from "./serve";

const isProd = process.env["NODE_ENV"] === "production";
const port = isProd ? 80 : 9876;

export const domain = isProd ? "0.0.0.0" : "0.0.0.0";

export const origin = isProd
  ? "https://walze.github.io/rpg"
  : "http://localhost:6789";

const server = createServer();

server.listen(port, domain, 512, () =>
  console.log(
    `listening ==> https://${domain}:${port}`,
    process.env["NODE_ENV"]
  )
);

server.on("request", (req, res) => {
  const url = !req.url?.includes(".") ? `${req.url}/index.html` : req.url;
  if (!url) throw "no url";

  try {
    serve(url, res);
  } catch (e) {
    res.statusCode = 404;

    console.error(e);
    res.end();
  }
});

const ws = new WebSocketServer({ server });

ws.on("connection", (client) => {
  console.log("connected");

  client.on("message", (data) => {
    console.log("received: %s", data);
  });

  client.send("server response");
});
