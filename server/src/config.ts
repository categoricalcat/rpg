import express, { type Express } from 'express';

import cors from 'cors';
import { compress } from 'lzutf8';
import { createServer } from 'http';
import { Server } from 'ws';
import { json } from 'body-parser';
import { resolvers } from '@generated/type-graphql';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import lt from './lt';
import { onConnection } from './ws';
import prisma from '@db';

export const port = 9876;
export const app = express() as Express;
export const server = createServer(app);
export const ws = new Server({ noServer: true });
ws.on('connection', onConnection);

app.use(cors()); // tnc

server.on('upgrade', (request, socket, head) => {
  ws.handleUpgrade(request, socket, head, (socket) => {
    ws.emit('connection', socket, request);
  });
});

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
  const schema = await buildSchema({
    resolvers,
    validate: false,
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
