import lt from 'localtunnel';
import { port } from './config';

const listen = async (): Promise<string> => {
  const t = await lt({ port });

  t.on('close', () => console.log('lt closed'));

  return t.url;
};

export default {
  listen,
};
