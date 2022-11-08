import type MessageModel from '@server/src/db/model/Message';
import { useEffect } from 'react';
import ChatInput from './component/ChatInput';
import Modal from './component/Modal';
import { isImage } from './helpers/isImage';
import { useStore } from './store';
import Sheet from './component/Sheet';

const loadMessage = async () =>
  await fetch('http://localhost:9876/messages').then(
    async (r) => (await r.json()) as MessageModel[],
  );

export const App = () => {
  const { messages, set } = useStore();

  useEffect(() => {
    loadMessage()
      .then((ms) => set({ messages: ms }))
      .catch(console.warn);
  }, []);

  // <Modal show={true}>
  //   <Sheet />
  // </Modal>

  console.log(messages);

  return (
    <>
      <h1 className="mt-6 text-4xl font-bold">RPG</h1>

      <ul className="mt-6 flex flex-col-reverse overflow-y-scroll">
        {[...messages].reverse().map((m) => (
          <li
            key={m.createdAt}
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
