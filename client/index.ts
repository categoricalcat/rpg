export const socket = new WebSocket("ws://localhost:1234");

socket.addEventListener("open", () => {
  console.log("connected");

  socket.send("client request");
});

socket.addEventListener("message", (event) => {
  console.log("received: %s", event.data);
});
