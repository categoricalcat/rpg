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
        className="my-8 bg-neutral-800 rounded"
      >
        <div className="flex flex-col gap-6 p-6">
          <h3 className="font-bold text-2xl">Character Sheet</h3>

          <div className="mb-4">
            <label className="block text-sm font-medium ">
              Photo
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                <svg
                  className="h-full w-full text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
              <button
                type="button"
                className="ml-5 rounded-md border border-gray-300 py-2 px-3 text-sm font-medium leading-4  shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Change
              </button>
            </div>
          </div>

          <div className="relative">
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block px-1 text-xs bg-neutral-800 text-red-600"
            >
              Name
            </label>

            <input
              type="text"
              name="name"
              id="name"
              className="focus:border-red-600 outline-none w-full bg-transparent placeholder-neutral-500 px-3 py-2 border border-gray-400 rounded-md"
              placeholder="João Limão"
            />
          </div>
        </div>

        <div className="bg-neutral-700 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
