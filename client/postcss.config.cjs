const tailwindcss = require('./tailwind.config.cjs');

module.exports = {
  plugins: {
    tailwindcss,
    cssnano: {},
  },
};
