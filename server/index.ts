import { createServer } from "http";
import { WebSocketServer } from "ws";

const server = createServer();
server.listen(1234);

const ws = new WebSocketServer({ server });

ws.on("connection", (client) => {
  console.log("connected");

  client.on("message", (data) => {
    console.log("received: %s", data);
  });

  client.send("server response");
});
