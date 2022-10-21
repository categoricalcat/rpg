import random from '@shared/helpers/random';

import assert from 'assert';

const range = (a: number, b: number) =>
  Math.floor(random() * (b - a + 1)) + a;

const dadoRegex = /(\d+)?\.(\d+)/g;

const getRolls = (s: string) =>
  [...s.matchAll(dadoRegex)].map(([, vezes = 1, lados]) => {
    assert(lados, 'dado sem lados');

    return Array.from({ length: +vezes }, () => range(1, +lados));
  });

const format = (rolls: number[][]): string => {
  const text = rolls.map((roll) => `|${roll.join('~')}|`).join(' ');
  const sum = rolls.flat().reduce((a, b) => a + b, 0);

  return `${text} = ${sum}`;
};

export default (...args: string[]) => {
  const text = args.join(' ');

  const rolls = getRolls(text);
  const formatted = format(rolls);

  return formatted;
};
