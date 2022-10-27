import '@server/db/setup';

import { app } from './config';

import Message from './db/controller/Message';

app.get('/messages', (_, res) => {
  Message.getAll()
    .then((ms) => res.end(JSON.stringify(ms)))
    .catch(console.warn);
});

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});
