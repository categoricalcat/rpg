import type { CreateOneMessageMutation } from '@generated';
import type WS_TYPES from '@helpers/WS_TYPES';

declare global {
  type WsEventObject<
    K extends keyof typeof WS_TYPES,
    T = unknown,
  > = {
    type: K;
    payload: T;
    event: MessageEvent<T>;
  };

  type WsEvent = WsEventObject<
    'NEW_MESSAGE',
    CreateOneMessageMutation
  >;
}
