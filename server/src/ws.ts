import WebSocket, { WebSocketServer } from 'ws';
import { fastify } from './server.js';

export const port = 9876;
export const ws = new WebSocketServer({
  server: fastify.server,
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
