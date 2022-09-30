export const socket = new WebSocket("ws://localhost:1234");

socket.addEventListener("open", () => {
  console.log("connected");

  socket.send("something");
});

socket.addEventListener("message", (event) => {
  console.log("received: %s", event.data);
});
