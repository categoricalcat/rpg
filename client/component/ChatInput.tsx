import Message from '../Message';
import { PaperClipIcon } from '@heroicons/react/20/solid';

import { FormEvent } from 'react';

export default () => {
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const value = data.get('chat-message') as string;
    if (!value) return;

    const msg = new Message(value);
    msg.send();
  };

  return (
    <form
      onInput={console.log}
      onSubmit={submit}
      className="relative mt-4"
    >
      <textarea
        rows={3}
        name="chat-message"
        id="chat-message"
        className="bg-neutral-800 rounded-lg border border-red-900/25 block w-full resize-none py-4 px-3 sm:text-sm"
        placeholder="Message @juan"
      />

      <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
        <div className="flex items-center space-x-5">
          <div className="flex items-center">
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
        </div>

        <div className="flex-shrink-0">
          <button
            type="submit"
            className="bg-red-600 inline-flex items-center rounded-md px-4 py-2"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};
