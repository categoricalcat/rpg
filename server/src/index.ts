/* eslint-disable @typescript-eslint/restrict-plus-operands */
import 'reflect-metadata';

import { app, initApollo } from './config';

initApollo();

// request delay
app.use((_, __, next) => setTimeout(next, 1000));

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});
