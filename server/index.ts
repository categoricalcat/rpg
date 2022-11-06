import '@server/db/setup';

import { app } from './config';

import Message from './db/controller/Message';

import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

// request delay
app.use((_, __, next) => setTimeout(next, 666));

app.get('/messages', (_, res) => {
  Message.getAll()
    .then((ms) => res.end(JSON.stringify(ms)))
    .catch(console.warn);
});

app.post('/upload', upload.single('upload'), (req, res) => {
  const status = req.file ? 200 : 400;

  res.status(status).end(req.file);
});

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});
