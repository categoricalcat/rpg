import express, { type Express } from 'express';

import cors from 'cors';
import { compress } from 'lzutf8';
import { createServer } from 'http';
import WebSocket, { WebSocketServer } from 'ws';
import { json } from 'body-parser';
import { resolvers } from '@generated/type-graphql';
import { buildTypeDefsAndResolvers } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import lt from './lt';
import prisma from '@db';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const port = 9876;
export const app = express() as Express;
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

// eslint-disable-next-line @typescript-eslint/no-misused-promises
server.listen(port, async () => {
  const url = await lt.listen();

  const c = compress(url, {
    outputEncoding: 'Base64',
  }) as string;

  const env = process.env['NODE_ENV'] as string;

  console.log(`
    listening >>= http://localhost:${port}
    token >>= ${c}
    tunneling >>= ${url}
    NODE_ENV >>= ${env}
    `);
});

export const initApollo = async () => {
  const build = await buildTypeDefsAndResolvers({
    resolvers,
    validate: false,
  });

  const schema = makeExecutableSchema({
    typeDefs: build.typeDefs,
    resolvers: build.resolvers,
  });

  const apollo = new ApolloServer({
    schema,
  });

  await apollo.start();

  app.use(
    '/graphql',
    json(),
    expressMiddleware(apollo, {
      context: async () => ({ prisma }),
    }),
  );
};
