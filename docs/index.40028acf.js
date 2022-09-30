const e=new WebSocket("ws://rpg-brabo.loca.lt");e.addEventListener("open",()=>{console.log("connected"),e.send("client request")});e.addEventListener("message",n=>{console.log("received: %s",n.data)});
//# sourceMappingURL=index.40028acf.js.map
