import Message from '../Message';
import { PaperClipIcon } from '@heroicons/react/20/solid';

import { TargetedEvent } from 'react';

export default () => {
  const submit = (e: TargetedEvent<HTMLFormElement>) => {
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
        className="overflow-hidden rounded-lg border border-gray-200 shadow-md focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 block w-full resize-none py-4 px-3 focus:ring-0 sm:text-sm"
        placeholder="Message @juan"
      />

      <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
        <div className="flex items-center space-x-5">
          <div className="flex items-center">
            <label
              htmlFor="file-upload"
              className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
            >
              <PaperClipIcon
                className="h-5 w-5"
                aria-hidden="true"
              />
              <span className="sr-only">Attach a file</span>

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
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
