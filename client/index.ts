const isProd = process.env["NODE_ENV"] !== "development";
console.log({ isProd });

export const socket = new WebSocket(
  isProd ? "ws://rpg.vps-kinghost.net/" : "ws://localhost:9876"
);

socket.addEventListener("open", () => {
  console.log("connected");

  socket.send("client request");
});

socket.addEventListener("message", (event) => {
  document.body.innerHTML = event.data;
});
