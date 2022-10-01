export const socket = new WebSocket(`wss://localhost:9876`);

socket.addEventListener("open", () => {
  console.log("connected");

  socket.send("client request");
});

socket.addEventListener("message", (event) => {
  console.log("received: %s", event.data);
});
