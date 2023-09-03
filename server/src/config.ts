import express from 'express';

import cors from 'cors';
import { createServer } from 'http';
import WebSocket, { WebSocketServer } from 'ws';

export const port = 9876;
export const app = express();
export const server = createServer(app);
export const ws = new WebSocketServer({
  server,
  path: '/graphql',
});

const clients = new Set<WebSocket>();

ws.on('connection', (client) => {
  clients.add(client);

  client.addEventListener('message', (m) =>
    clients.forEach((c) => {
      if (c.readyState === 1) c.send(m.data);
    }),
  );
});

ws.on('close', (s: WebSocket) => {
  clients.delete(s);
});

app.use(cors()); // tnc
