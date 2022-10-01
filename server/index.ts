import { createReadStream } from "fs";
import type { ServerResponse } from "http";
import { createServer } from "https";
import mime from "mime";
import path from "path";
import { WebSocketServer } from "ws";
import cert from "../cert";

const publicF = path.join(__dirname, "../docs");

const port = 9876;
export const origin =
  process.env["NODE_ENV"] === "production"
    ? "https://walze.github.io/rpg"
    : "http://localhost:6789";

const server = createServer({ ...cert });

server.listen(port, () => {
  console.log(`listening ==> https://0.0.0.0:${port}`);
});

const serveFile = (url: string, res: ServerResponse) => {
  const type = mime.getType(url);

  if (!type) throw "no type";

  const stream = createReadStream(publicF + url);

  stream.on("error", () => {
    res.statusCode = 404;
    res.end();
  });

  stream.on("open", () => {
    res.writeHead(200, { "Content-Type": type });
    stream.pipe(res);
  });
};

server.on("request", (req, res) => {
  const url = !req.url?.includes(".") ? `${req.url}/index.html` : req.url;

  if (!url) throw 1;

  try {
    serveFile(url, res);
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
