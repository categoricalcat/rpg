/* eslint-disable @typescript-eslint/restrict-plus-operands */
import 'reflect-metadata';

import { availableParallelism } from 'node:os';
import process from 'node:process';

import lt from '@lt.js';
import server from '@server.js';
import url from '@apollo.js';

console.log('apollo running at ' + url);

const numCPUs = availableParallelism();

console.log(
  `Worker ${process.pid} is running | ${numCPUs} | ${
    process.env['NODE_ENV']
  } | ${await server}`,
);

lt.listen().then((url) =>
  console.log('lt is listening at', url),
);

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});
