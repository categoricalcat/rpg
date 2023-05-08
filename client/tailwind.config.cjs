const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    fontFamily: {
      sans: ['Lato', ...defaultTheme.fontFamily.sans],
      mono: ['Noto Sans Mono', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
    plugins: [require('@tailwindcss/forms')],
  },
};
