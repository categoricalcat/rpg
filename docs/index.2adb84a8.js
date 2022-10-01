const e=new WebSocket("wss://localhost:9876");e.addEventListener("open",()=>{console.log("connected"),e.send("client request")});e.addEventListener("message",s=>{console.log("received: %s",s.data)});
//# sourceMappingURL=index.2adb84a8.js.map
