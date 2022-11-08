import { Button } from './Button';
import Input from './Input';

/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <>
      <form
        action="#"
        method="POST"
        className="my-8 rounded bg-neutral-800"
      >
        <div className="flex flex-col gap-6 p-6">
          <h3 className="text-2xl font-bold">Character Sheet</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium ">
              Photo
            </label>
            <div className="mt-1 flex items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full">
                ?
              </span>

              <Input label="Photo" name="profile-photo" />
            </div>
          </div>

          <Input
            label="Name"
            name="char-name"
            placeholder="João Limão"
          />
        </div>

        <div className="bg-neutral-700 px-4 py-3 text-right sm:px-6">
          <Button>Save</Button>
        </div>
      </form>
    </>
  );
}
