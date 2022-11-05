import Color from 'color';

const RATE = 0.2;

const getColor = (color: Color, name: string, r = RATE) => ({
  [`--color-${name}--3`]: color.darken(r * 3).hex(),
  [`--color-${name}--2`]: color.darken(r * 2).hex(),
  [`--color-${name}--1`]: color.darken(r).hex(),
  [`--color-${name}`]: color.hex(),
  [`--color-${name}-1`]: color.lighten(r).hex(),
  [`--color-${name}-2`]: color.lighten(r * 2).hex(),
  [`--color-${name}-3`]: color.lighten(r * 3).hex(),
  [`--color-${name}-4`]: color.lighten(r * 4).hex(),
  [`--color-${name}-5`]: color.lighten(r * 5).hex(),
});

type Colors = [string, string, string];

const useColors = (
  [black, white, color]: Colors = [
    '#0E0D0D',
    '#F2EDA7',
    '#BF0F0F',
  ],
) => {
  const colors = {
    ...getColor(Color(black), 'black', 0.333),
    ...getColor(Color(white), 'white'),
    ...getColor(Color(color), 'default'),
  };

  Object.entries(colors).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value);
  });
};

export default useColors;
