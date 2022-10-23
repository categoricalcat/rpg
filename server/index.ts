import '@server/db/setup';

import assert from 'assert';
import serve from '@server/serve';
import { server, port, domain } from './config';

import { compress } from 'lzutf8';

import lt from '@server/lt';

import { broadcast, ws } from '@server/ws';
import type { WebSocket } from 'ws';

// eslint-disable-next-line @typescript-eslint/no-misused-promises
server.listen(port, domain, 512, async () => {
  const url = await lt.listen();
  const c = compress(url, { outputEncoding: 'Base64' }) as string;
  const env = process.env['NODE_ENV'] as string;

  console.log(`
    listening >>= http://${domain}:${port}
    token >>= ${c}
    tunneling >>= ${url}
    NODE_ENV >>= ${env}
    `);
});

const clients = new Set<WebSocket>();

server.on('upgrade', function upgrade(req, socket, head) {
  ws.handleUpgrade(req, socket, head, function done(ws) {
    ws.emit('connection', ws, req);
    ws.emit('open');

    clients.add(ws);

    ws.on('message', (data: Buffer) => {
      clients.forEach(broadcast(data, true));
    });

    ws.on('close', () => {
      clients.delete(ws);
    });
  });
});

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

server.on('error', (e) => {
  console.log('WebServer Error');
  console.error(e);
});

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});
