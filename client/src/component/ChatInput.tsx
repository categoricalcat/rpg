import Message from '../Message';
import { PaperClipIcon } from '@heroicons/react/20/solid';

import { FormEvent, useState } from 'react';

interface DataForm {
  file: File;
  'chat-message': string;
}

const submit =
  ({ 'chat-message': message, file }: Partial<DataForm>) =>
  (e: FormEvent) => {
    e.preventDefault();

    const msg = new Message(message, file);

    msg.send().catch(console.warn);
  };

export default () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [form, setf] = useState<HTMLFormElement | null>();

  const getData = (): Partial<DataForm> =>
    Object.fromEntries(new FormData(form ?? undefined) as any);

  return (
    <form
      ref={setf}
      onSubmit={submit(getData())}
      onInput={(e) => {
        const target = e.target as HTMLInputElement;
        if (target.name !== 'file') return;

        const newData = getData();
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
          if (e.key !== 'Enter' || e.shiftKey) return;
          submit(getData())(e);

          const target = e.target as HTMLTextAreaElement;
          target.value = '';
        }}
        name="chat-message"
        id="chat-message"
        className="block w-full resize-none rounded-lg border border-red-900/25 bg-neutral-800 py-4 pl-10 sm:text-sm"
        placeholder="Message @juan"
        rows={1}
      />

      <label
        htmlFor="file-upload"
        className="absolute top-4 left-3 mt-0.5 cursor-pointer"
      >
        <PaperClipIcon
          className="h-5 w-5 fill-red-600"
          aria-hidden="true"
        />

        <input type="file" name="file" hidden id="file-upload" />
      </label>

      <button
        type="submit"
        className="absolute top-2 right-2 inline-flex items-center rounded-md bg-red-600 px-4 py-2"
      >
        Send
      </button>

      {preview && <img src={preview} />}
    </form>
  );
};
