const e=new WebSocket("ws://localhost:9876");e.addEventListener("open",()=>{console.log("connected"),e.send("client request")});e.addEventListener("message",n=>{console.log("received: %s",n.data)});
//# sourceMappingURL=index.c73f3efb.js.map
