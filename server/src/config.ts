import express from 'express';

import cors from 'cors';
import { createServer } from 'http';
import WebSocket, { WebSocketServer } from 'ws';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import prisma from '@db/index.js';

import { resolvers } from '@generated/typegraphql/index.js';

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

export const listen = () =>
  server.listen(port, async () => {
    console.log(`Worker ${process.pid} started`);
  });

export const initApollo = async () => {
  const schema = await buildSchema({
    resolvers,
    validate: false,
  });

  const apollo = new ApolloServer({
    schema,
  });

  await apollo.start();

  const h = await startStandaloneServer(apollo, {
    context: async () => ({ prisma }),
    listen: {
      port: 9999,
    },
  });

  console.log(h.url);
};
