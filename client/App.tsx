import type MessageModel from '@server/db/model/Message';
import { useEffect, useState } from 'react';
import ChatInput from './component/ChatInput';
import { isImage } from './helpers/isImage';

const loadMessage = async () =>
  await fetch('http://localhost:9876/messages').then(
    async (r) => (await r.json()) as MessageModel[],
  );

export const App = () => {
  const [ms, setMs] = useState<MessageModel[]>([]);

  useEffect(() => {
    loadMessage().then(setMs).catch(console.warn);
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl mt-6">RPG</h1>

      <ul className="mt-6 max-h-96 overflow-y-scroll">
        {ms.map((m) => (
          <li className="mb-2 flex flex-col items-start p-4 pb-5">
            <h2 className="text-lg">
              <span className="font-bold">{m.sender}</span>
              <time
                dateTime="2022-02-24T00:00:00.000Z"
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
