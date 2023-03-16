import { send } from '../Message';
import { PaperClipIcon } from '@heroicons/react/20/solid';

import { useState } from 'react';

interface DataForm {
  'chat-message': string;
}

export default () => {
  const [form, setf] = useState<HTMLFormElement | null>();

  const getData = (): Partial<DataForm> =>
    Object.fromEntries(new FormData(form ?? undefined) as any);

  const submit = () => {
    const data = getData();
    if (!data['chat-message']) return;

    send(data['chat-message'], 'me', 'you').catch(console.log);
  };

  return (
    <form
      ref={setf}
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
      className="relative mt-4"
    >
      <textarea
        onKeyDown={(e) => {
          if (e.key !== 'Enter' || e.shiftKey) return;
          e.preventDefault();
          submit();

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
    </form>
  );
};
