/* eslint-disable @typescript-eslint/restrict-plus-operands */

import '@server/db/setup';

import { app } from './config';

import Message from './db/controller/Message';

import multer from 'multer';
import path from 'path';
import exp from 'express';

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads/');
  },
  filename: (_, file, cb) => {
    const uniqueSuffix =
      Date.now() + '-' + Math.round(Math.random() * 1e9);

    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// request delay
app.use((_, __, next) => setTimeout(next, 666));
app.use('/uploads', exp.static('uploads'));

app.get('/messages', (_, res) => {
  Message.getAll()
    .then((ms) => res.end(JSON.stringify(ms)))
    .catch(console.warn);
});

app.post('/upload', upload.single('upload'), (req, res) => {
  const status = req.file ? 200 : 404;

  res.status(status).end(req.file?.filename);
});

process.on('uncaughtException', (e) => {
  console.log('Fatal Error');
  console.error(e);
});
