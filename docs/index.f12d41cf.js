const e=new WebSocket("ws://localhost:1234");e.addEventListener("open",()=>{console.log("connected"),e.send("client request")});e.addEventListener("message",n=>{console.log("received: %s",n.data)});
//# sourceMappingURL=index.f12d41cf.js.map
