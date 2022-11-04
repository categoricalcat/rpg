import type MessageModel from '@server/db/model/Message';
import { useEffect, useState } from 'preact/hooks';
import ChatInput from './component/ChatInput';
import { isImage } from './helpers/isImage';

const loadMessage = async () =>
  await fetch('http://localhost:9876/messages')
    .then(async (r) => (await r.json()) as MessageModel[])
    .then((ms) => ms.reverse().slice(0, 5));

export const App = () => {
  const [ms, setMs] = useState<MessageModel[]>([]);

  useEffect(() => {
    loadMessage().then(setMs).catch(console.warn);
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl mb-4">RPG</h1>

      <ul className="w-full mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8">
        {ms.map((m) => (
          <li class="mb-4 flex flex-col items-start">
            <h2
              id="episode-5-title"
              class="mt-2 text-lg text-slate-900"
            >
              <span className="font-bold">{m.sender}</span> -{' '}
              <time
                dateTime="2022-02-24T00:00:00.000Z"
                class="order-first font-mono text-sm leading-7 text-slate-500"
              >
                {new Date(m.createdAt).toLocaleString()}
              </time>
            </h2>

            <p class="mt-1 text-base leading-7 text-slate-700">
              {isImage(m.text) ? (
                <img width={256} src={m.text} />
              ) : (
                <p>{m.text}</p>
              )}
            </p>
          </li>
        ))}
      </ul>

      <ChatInput />
    </>
  );
};
