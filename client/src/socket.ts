import type { DocumentNode } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import secretReset from './helpers/secretReset';
import { Observable } from 'rxjs';
import { getSdk } from '@generated';

secretReset(() => {
  localStorage.removeItem('token');
});

if (!localStorage.getItem('token'))
  localStorage.setItem(
    'token',
    prompt('Enter token') || 'ws://localhost:9876',
  );

const token =
  localStorage.getItem('token') || 'ws://localhost:9876';

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
