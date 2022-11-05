import type MessageModel from '@server/db/model/Message';
import { useEffect, useState } from 'preact/hooks';
import ChatInput from './component/ChatInput';
import Colors from './component/Colors';
import useColors from './helpers/colors';
import { isImage } from './helpers/isImage';

const loadMessage = async () =>
  await fetch('http://localhost:9876/messages')
    .then(async (r) => (await r.json()) as MessageModel[])
    .then((ms) => ms.reverse().slice(0, 5));

export const App = () => {
  const [ms, setMs] = useState<MessageModel[]>([]);

  useEffect(() => {
    loadMessage().then(setMs).catch(console.warn);

    useColors();
  }, []);

  return (
    <>
      <h1 className="font-bold text-4xl mt-6">RPG</h1>

      <ul className="mt-6">
        {ms.map((m) => (
          <li class="mb-2 flex flex-col items-start even:bg-neutral-800 p-4 pb-5">
            <h2 class="text-lg">
              <span className="font-bold">{m.sender}</span> -{' '}
              <time
                dateTime="2022-02-24T00:00:00.000Z"
                class="font-mono text-sm leading-7 text-black-"
              >
                {new Date(m.createdAt).toLocaleString('pt-BR', {
                  day: '2-digit',
                  month: '2-digit',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </time>
            </h2>

            <p class="mt-1 text-base leading-7 text-slate-700">
              {isImage(m.text) ? (
                <img width={128} src={m.text} />
              ) : (
                <p>{m.text}</p>
              )}
            </p>
          </li>
        ))}
      </ul>

      <ChatInput />

      <Colors />
    </>
  );
};
