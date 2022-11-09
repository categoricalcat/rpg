import { getSdk } from '@generated';
import type { DocumentNode } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { decompress } from 'lzutf8';
import secretReset from './helpers/secretReset';
import { Observable } from 'rxjs';

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

export const ws$ = new Observable<WsEvent>((subscriber) =>
  ws.addEventListener('message', (event) => {
    const data = JSON.parse(event.data);

    subscriber.next({
      ...data,
      event,
    });
  }),
);

ws.addEventListener('connected', console.warn);
ws.addEventListener('error', console.log);

export const client = new GraphQLClient(
  `${token.replace('ws', 'http')}/graphql`,
);

export const sdk = getSdk(client);
export type SDK = typeof sdk;

export const query = <T>(
  type: string,
  fn: (sdk: SDK) => Promise<T>,
) =>
  fn(sdk).then((payload) => {
    ws.send(
      JSON.stringify({
        type,
        payload,
      }),
    );

    return payload;
  });

export default ws;
