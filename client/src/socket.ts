import { getSdk } from '@generated';
import type { DocumentNode } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { decompress } from 'lzutf8';
import secretReset from './helpers/secretReset';

secretReset(() => {
  localStorage.removeItem('token');
});

if (!localStorage.getItem('token')) {
  const nToken = prompt('Enter token');

  if (!nToken) {
    throw new Error('No token provided');
  }

  localStorage.setItem('token', nToken);
}

const token_ = localStorage.getItem('token');
const token = (decompress(token_, {
  inputEncoding: 'Base64',
}).trim() || 'ws://localhost:9876') as string;

export const doc2String = (doc: DocumentNode) =>
  (doc.loc && doc.loc.source.body) || '';

const ws = new WebSocket(`${token}/graphql`);

ws.addEventListener('connected', console.warn);
ws.addEventListener('error', console.log);

export const client = new GraphQLClient(
  `${token.replace('ws', 'http')}/graphql`,
);
export const sdk = getSdk(client);

export type SDK = typeof sdk;

export const query = async <T>(
  name: string,
  fn: (sdk: SDK) => Promise<T>,
) => {
  const res = await fn(sdk);

  ws.send(
    JSON.stringify({
      type: name,
      payload: res,
    }),
  );

  return await new Promise<T>((res) => {
    ws.addEventListener('message', (m) => {
      console.log({ m });
      const { type, payload } = JSON.parse(m.data);

      if (type === name) res(payload);
    });
  });
};

export default ws;
