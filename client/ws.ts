import { decompress } from 'lzutf8';
import secretReset from './helpers/secretReset';

secretReset(() => {
  localStorage.removeItem('token');
});

if (!localStorage.getItem('token')) {
  const nToken = prompt('Enter token');

  if (!nToken) {
    alert('No token provided, try again. Reloading page...');
    window.location.reload();
    throw new Error('No token provided');
  }

  localStorage.setItem('token', nToken);
}

const token_ = localStorage.getItem('token');
const token =
  decompress(token_, { inputEncoding: 'Base64' }).trim() ||
  'ws://localhost:9876';

const ws = new window.WebSocket(token);

ws.addEventListener('error', () => {
  localStorage.removeItem('token');
  alert('Invalid token, try again. Reloading page...');
  window.location.reload();
  throw new Error('Invalid token');
});

ws.addEventListener('open', (e) => {
  console.log('connected', e);
});

ws.addEventListener(
  'message',
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async ({ data }: MessageEvent<Blob>) => {
    const text = await data.text();

    document.body.prepend(
      new Date().toLocaleString(),
      ' | ',
      text,
      document.createElement('br'),
    );
  },
);

export default ws;
