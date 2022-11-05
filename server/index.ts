import '@server/db/setup';

import { app } from './config';

import Message from './db/controller/Message';

import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

app.get('/messages', (_, res) => {
  Message.getAll()
    .then((ms) => res.end(JSON.stringify(ms)))
    .catch(console.warn);
});

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);

  res.send('ok');
});

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});
