import type MessageModel from '@server/db/model/Message';
import { useEffect } from 'react';
import ChatInput from './component/ChatInput';
import { isImage } from './helpers/isImage';
import { useStore } from './store';

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

  return (
    <>
      <h1 className="font-bold text-4xl mt-6">RPG</h1>

      <ul className="mt-6 overflow-y-scroll flex flex-col-reverse">
        {[...messages].reverse().map((m) => (
          <li
            key={m.createdAt}
            className="mb-2 flex flex-col items-start p-4 pb-5"
          >
            <h2 className="text-lg">
              <span className="font-bold">{m.sender}</span>

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
              {console.log(m.text.split(/\s/giu).map((t) => {x}))}

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
