const ws = new WebSocket('ws://localhost:9876');

ws.addEventListener('open', (e) => {
  console.log('connected', e);
});

ws.addEventListener('message', (e) => {
  const { data } = e;

  const br = document.createElement('br');

  document.body.prepend(new Date().toLocaleString(), ' | ', data, br);
});

export default ws;
