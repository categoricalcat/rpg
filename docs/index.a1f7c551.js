console.log({isProd:!1});const e=new WebSocket("ws://localhost:9876");e.addEventListener("open",()=>{console.log("connected"),e.send("client request")});e.addEventListener("message",o=>{document.body.innerHTML=o.data});
//# sourceMappingURL=index.a1f7c551.js.map
