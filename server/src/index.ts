/* eslint-disable @typescript-eslint/restrict-plus-operands */
import 'reflect-metadata';

import { app, initApollo, listen } from '@config';

import cluster from 'node:cluster';
import { availableParallelism } from 'node:os';
import process from 'node:process';
import lt from '@lt';

const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(
    `Primary ${process.pid} is running | ${numCPUs} | ${
      process.env['NODE_ENV']
    } | http://localhost:${process.env['PORT'] || 9876}/`,
  );
  lt.listen().then((url) =>
    console.log('lt is listening at', url),
  );

  for (let i = 0; i < numCPUs; i++) cluster.fork();

  cluster.on('exit', (worker, code, signal) => {
    console.log(
      `worker ${worker.process.pid} died`,
      code,
      signal,
    );
  });
} else {
  // request delay
  app.use((_, __, next) => {
    console.log('request for worker ' + process.pid);
    setTimeout(next, 1000);
  });

  app.get('/', (_, res) => {
    res.send('approved');
  });

  process.on('uncaughtException', (e) => {
    console.log('Fatal Error');
    console.error(e);
  });

  initApollo();
  listen();
}
