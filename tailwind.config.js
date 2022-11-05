const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./client/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    fontFamily: {
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
      mono: ['Noto Sans Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
    plugins: [require('@tailwindcss/forms')],
  },
};
