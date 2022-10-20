import assert from 'assert';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import serve from './serve';

const isProd = process.env['NODE_ENV'] === 'production';
const port = isProd ? 80 : 9876;

export const domain = isProd ? '0.0.0.0' : '0.0.0.0';

export const origin = isProd
  ? 'https://walze.github.io/rpg'
  : 'http://localhost:6789';

const server = createServer();

server.listen(port, domain, 512, () =>
  console.log(
    `listening ==> https://${domain}:${port}`,
    process.env['NODE_ENV'],
  ),
);

server.on('request', (req, res) => {
  const { url } = req;
  assert(url, 'url is undefined');

  const path = !url?.includes('.') ? `${url}/index.html` : url;
  if (!path) throw new Error('no url');

  try {
    serve(path, res);
  } catch (e) {
    res.statusCode = 404;

    console.error(e);
    res.end();
  }
});

const ws = new WebSocketServer({ server });

ws.on('connection', (client) => {
  console.log('connected');

  client.on('message', (data) => {
    console.log('received: %s', data);
  });

  client.send('server response');
});
