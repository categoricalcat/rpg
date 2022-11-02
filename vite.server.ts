/* eslint-disable @typescript-eslint/no-misused-promises */
import fs from 'fs';
import path from 'path';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const app = express();
app.listen(5173, () => console.log('http://localhost:5173'));

async function createServer() {
  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  // use vite's connect instance as middleware
  // if you use your own express router (express.Router()), you should use router.use
  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const index = fs.readFileSync(
        path.resolve(__dirname, 'client/index.html'),
        'utf-8',
      );

      const template = await vite.transformIndexHtml(url, index);

      // const { render } = await vite.ssrLoadModule(
      //   '/src/entry-server.js',
      // );

      // const appHtml = await render(url);

      // const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as any);
      next(e);
    }
  });
}

createServer().catch(console.error);
