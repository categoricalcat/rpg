import { useEffect } from 'react';
import ChatInput from './component/ChatInput';
import Modal from './component/Modal';
import { isImage } from './helpers/isImage';
import { useStore } from './store';
import Sheet from './component/sheet';

import usePromise from '@helpers/usePromise';
import { sdk, ws$ } from '@socket';
import use$ from '@helpers/use$';
import WS_TYPES from '@helpers/WS_TYPES';

export const App = () => {
  const { messages, set, addMessage } = useStore();

  useEffect(() => {
    sdk
      .Messages()
      .then((r) => r.messages)
      .then((ms) => set({ messages: ms }))
      .catch(console.warn);
  }, []);

  const sheet = usePromise(() => sdk.Sheets());
  const ws = use$(() => ws$);

  useEffect(() => {
    if (!ws) return;

    if (ws.type === WS_TYPES.NEW_MESSAGE)
      addMessage(ws.payload.createOneMessage);
  }, [ws]);

  if (!sheet) return null;

  return (
    <>
      <Modal show={false}>
        <Sheet {...sheet} />
      </Modal>

      <h1 className="mt-6 text-4xl font-bold">RPG</h1>

      <ul className="mt-6 flex max-h-80 flex-col-reverse  overflow-y-scroll">
        {[...messages].reverse().map((m) => (
          <li
            key={m.id}
            className="mb-2 flex flex-col items-start p-4 pb-5"
          >
            <h2 className="text-lg">
              <span className="font-bold">{m.sName}</span>

              <time
                dateTime={m.createdAt}
                className="font-mono text-sm font-extralight text-yellow-50/70"
              >
                {' - '}
                {new Date(m.createdAt).toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </time>
            </h2>

            <div className="mt-1">
              {isImage(m.text) ? (
                <img width={128} src={m.text} />
              ) : (
                <p>{m.text}</p>
              )}
            </div>
          </li>
        ))}
      </ul>

      <ChatInput />
    </>
  );
};
