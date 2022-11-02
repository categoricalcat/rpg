/* eslint-disable @typescript-eslint/no-misused-promises */
import fs, { readFileSync } from 'fs';
import path from 'path';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { render } from 'mustache';
import allFiles from './vite/helpers/allFiles';

const app = express();
app.listen(5173, () => console.log('http://localhost:5173'));

const folders = allFiles('**/*.html', {
  cwd: 'client/component',
}).map((f) => [
  f.replace(/\/?(index)?\.html$/, ''),
  readFileSync(path.resolve(__dirname, 'client/component', f), {
    encoding: 'utf8',
  }),
]);

const createServer = async () => {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const index = fs.readFileSync(
        path.resolve(__dirname, 'client/index.html'),
        'utf-8',
      );

      const template = await vite.transformIndexHtml(url, index);
      const compiled = render(
        template,
        {},
        Object.fromEntries(folders),
      );

      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(compiled);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
};

createServer().catch(console.error);
