export const socket = new WebSocket(`ws://rpg-brabo.loca.lt`);

socket.addEventListener("open", () => {
  console.log("connected");

  socket.send("client request");
});

socket.addEventListener("message", (event) => {
  console.log("received: %s", event.data);
});
