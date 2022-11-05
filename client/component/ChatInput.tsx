import Message from '../Message';
import { PaperClipIcon } from '@heroicons/react/20/solid';

import { FormEvent, useRef, useState } from 'react';

interface DataForm {
  file: File;
  'chat-message': string;
}

const submit =
  ({ 'chat-message': message, file }: Partial<DataForm>) =>
  (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLInputElement;

    if (!message) return;

    const msg = new Message(message);
    msg.send();
    target.value = '';

    if (!file) return;

    fetch('http://localhost:9876/upload', {
      method: 'POST',
      body: file,
    }).catch(console.warn);
  };

export default () => {
  const form = useRef<HTMLFormElement>(null);
  const getData = (): Partial<DataForm> =>
    Object.fromEntries(
      new FormData(form.current ?? undefined) as any,
    );

  const [preview, setPreview] = useState<string | null>(null);

  return (
    <form
      ref={form}
      onSubmit={submit(getData())}
      onInput={(e) => {
        const newData = getData();

        const target = e.target as HTMLInputElement;
        if (target.name !== 'file') return;

        const file = newData.file as File;

        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.addEventListener('loadend', () => {
          setPreview(reader.result as string);
        });
      }}
      className="relative mt-4"
    >
      <textarea
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            submit(getData())(e);
          }
        }}
        name="chat-message"
        id="chat-message"
        className="bg-neutral-800 rounded-lg border border-red-900/25 block w-full resize-none py-4 pl-10 sm:text-sm"
        placeholder="Message @juan"
      />

      <div className="absolute inset-x-0 top-0 flex justify-between py-2 pl-3 pr-2">
        <div className="flex items-center justify-center">
          <label
            htmlFor="file-upload"
            className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full cursor-pointer"
          >
            <PaperClipIcon
              className="h-5 w-5 fill-red-600"
              aria-hidden="true"
            />

            <input
              type="file"
              name="file"
              hidden
              id="file-upload"
            />
          </label>
        </div>

        <button
          type="submit"
          className="bg-red-600 inline-flex items-center rounded-md px-4 py-2"
        >
          Send
        </button>
      </div>

      {preview && <img src={preview} />}
    </form>
  );
};
