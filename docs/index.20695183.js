console.log({ isProd: !0 });
const e = new WebSocket("ws://rpg.vps-kinghost.net/");
e.addEventListener("open", () => {
  console.log("connected"), e.send("client request");
});
e.addEventListener("message", (n) => {
  document.body.innerHTML = n.data;
});
//# sourceMappingURL=index.20695183.js.map
