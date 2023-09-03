/* eslint-disable @typescript-eslint/restrict-plus-operands */
import 'reflect-metadata';

import { availableParallelism } from 'node:os';
import process from 'node:process';
import { Router } from 'express';

import lt from '@lt.js';
import { app, server } from '@config.js';

import url from '@apollo.js';

console.log('apollo running at ' + url);

const router = Router() as Router;
app.use(router);

const numCPUs = availableParallelism();

console.log(
  `Worker ${process.pid} is running | ${numCPUs} | ${
    process.env['NODE_ENV']
  } | http://localhost:${process.env['PORT'] || 9876}/`,
);

lt.listen().then((url) =>
  console.log('lt is listening at', url),
);

// request delay
// router.use((_, __, next) => {
//   console.log('request for worker ' + process.pid);
//   setTimeout(next, 1000);
// });

// router.get('/', (_, res) => {
//   res.send('approved');
// });

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});

server.listen(process.env['PORT'] || 9876);
