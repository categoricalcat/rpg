import express, { type Express } from 'express';

import cors from 'cors';
import lt from './lt';
import { compress } from 'lzutf8';
import { createServer } from 'http';

export const port = 9876;
export const domain = 'localhost';
export const origin = 'http://localhost:9876';
export const app = express() as Express;
export const server = createServer(app);

app.use(cors());

// eslint-disable-next-line @typescript-eslint/no-misused-promises
server.listen(port, async () => {
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
