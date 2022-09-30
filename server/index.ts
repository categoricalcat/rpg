import { createServer } from "http";
import { WebSocketServer } from "ws";
import lt from "localtunnel";
const port = +(process.env["PORT"] || 9876);

lt({
  subdomain: "rpg-brabo",
  port,
}).then((t) => {
  console.log("Tunnel open at", t.url);

  t.on("close", () => {
    console.log("Tunnel closed");
  });
});

const server = createServer();
server.on("request", (_, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("otario");
});

server.listen(port, () => {
  console.log(`Listening ==> http://0.0.0.0:${port}`);
});

const ws = new WebSocketServer({ server });

ws.on("connection", (client) => {
  console.log("connected");

  client.on("message", (data) => {
    console.log("received: %s", data);
  });

  client.send("server response");
});
