import * as forms from '@tailwindcss/forms';

const tailwindcss = {
  content: [
    './client/index.html',
    './client/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [forms],
};

export default {
  plugins: {
    tailwindcss,
  },
};
