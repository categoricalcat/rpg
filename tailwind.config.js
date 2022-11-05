const getColor = (name) => ({
  [-1]: `var(--color-${name}--1)`,
  [-2]: `var(--color-${name}--2)`,
  [-3]: `var(--color-${name}--3)`,
  DEFAULT: `var(--color-${name})`,
  1: `var(--color-${name}-1)`,
  2: `var(--color-${name}-2)`,
  3: `var(--color-${name}-3)`,
  4: `var(--color-${name}-4)`,
  5: `var(--color-${name}-5)`,
});

module.exports = {
  content: ['./client/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    colors: {
      black: getColor('black'),
      white: getColor('white'),
      color: getColor('default'),
      extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
