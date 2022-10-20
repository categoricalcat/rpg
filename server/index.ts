import assert from 'assert';
import { createServer } from 'http';
import Command from '@shared/Command';
import WebSocket, { WebSocketServer } from 'ws';
import serve from './serve';

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

ws.on('connection', (client) => {
  console.log('connected');

  client.on('message', (data: string, binary) => {
    const isCommand = Command.isCommand(data);

    // lidar com comando
    console.log(isCommand);

    ws.clients.forEach((c) => {
      if (c.readyState !== WebSocket.OPEN) return;

      c.send(data, { binary });
    });
  });
});
