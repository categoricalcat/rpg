import assert from 'assert';
import { createServer } from 'http';
import Command from '@shared/Command';
import { WebSocketServer, OPEN, type WebSocket } from 'ws';
import serve from '@server/serve';

export const port = 9876;
export const domain = '0.0.0.0';
export const origin = 'http://localhost:9876';

const server = createServer();

server.listen(port, domain, 512, () =>
  console.log(
    `listening ==> https://${domain}:${port}`,
    process.env['NODE_ENV'],
  ),
);

server.on('request', (req, res) => {
  const { url } = req;
  assert(url, 'url is undefined');

  const path = !url?.includes('.') ? `${url}index.html` : url;
  if (!path) throw new Error('no url');

  try {
    serve(path, res);
  } catch (e) {
    res.statusCode = 404;

    console.error(e);
    res.end();
  }
});

const ws = new WebSocketServer({ server });

const sendMessage =
  (data: Buffer, binary: boolean) => (c: WebSocket) => {
    if (c.readyState !== OPEN) return;
    const text = data.toString();

    const isCommand = Command.isCommand(text);

    const newText = isCommand
      ? new Command(text).run() ?? 'Invalid Command'
      : text;

    c.send(newText, { binary, compress: true });
  };

ws.on('connection', (client) => {
  console.log('connected');

  client.on('message', (data: Buffer, binary) => {
    ws.clients.forEach(sendMessage(data, binary));
  });
});

server.on('error', (e) => {
  console.log('WebServer Error');
  console.error(e);
});

ws.on('error', (e) => {
  console.log('WebSocket Error');
  console.error(e);
});

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});
