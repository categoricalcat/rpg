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
          <li
            key={m.createdAt}
            className="border-t border-gray-200 pt-1 mt-4"
          >
            <span className="font-medium text-gray-900">
              {new Date(m.createdAt).toLocaleString()}
            </span>
            <span className="mt-2 text-sm text-gray-500">
              {isImage(m.text) ? (
                <img src={m.text} />
              ) : (
                <p>{m.text}</p>
              )}
            </span>
          </li>
        ))}
      </ul>

      <ChatInput />
    </>
  );
};
