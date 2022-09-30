import { createServer } from "http";
import { WebSocketServer } from "ws";

const port = process.env["PORT"] || 9876;

const server = createServer();
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
