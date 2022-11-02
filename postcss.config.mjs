const tailwindcss = {
  content: ['./client/index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default {
  plugins: {
    tailwindcss,
  },
};
