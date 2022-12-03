import { useEffect } from 'react';
import ChatInput from './component/ChatInput';
import Modal from './component/Modal';
import { isImage } from './helpers/isImage';
import { useStore } from './store';
import Sheet from './component/sheet';

import { sdk, ws$ } from '@socket';
import use$ from '@helpers/use$';
import WS_TYPES from '@helpers/WS_TYPES';
import Loader from '@assets/Loader';

export const App = () => {
  const { messages, set, addMessage, sheet } = useStore();

  useEffect(() => {
    sdk
      .Messages()
      .then((r) => r.messages)
      .then((ms) => set({ messages: ms }))
      .catch(console.warn);

    sdk
      .getSheet({ where: { userName: { equals: 'me' } } })
      .then((r) => r.findFirstSheet)
      .then((s) => set({ sheet: s || null }))
      .catch(console.warn);
  }, []);

  const ws = use$(() => ws$);

  useEffect(() => {
    if (!ws) return;

    if (ws.type === WS_TYPES.NEW_MESSAGE)
      addMessage(ws.payload.createOneMessage);
  }, [ws]);

  if (!sheet || !messages.length) return <Loader />;

  return (
    <>
      <Modal show={true}>
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
