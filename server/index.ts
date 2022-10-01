import { createServer } from "https";
import { WebSocketServer } from "ws";
import cert from "../cert";
import serve from "./serve";

const port = 9876;
export const origin =
  process.env["NODE_ENV"] === "production"
    ? "https://walze.github.io/rpg"
    : "http://localhost:6789";

const server = createServer(cert);

server.listen(port, () => console.log(`listening ==> https://0.0.0.0:${port}`));

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
