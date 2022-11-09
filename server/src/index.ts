/* eslint-disable @typescript-eslint/restrict-plus-operands */
import 'reflect-metadata';

import { app, initApollo } from './config';

import Message from './db/controller/Message';

initApollo();

// request delay
app.use((_, __, next) => setTimeout(next, 666));

app.get('/messages', (_, res) => {
  Message.getAll()
    .then((ms) => res.end(JSON.stringify(ms)))
    .catch(console.warn);
});

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});
