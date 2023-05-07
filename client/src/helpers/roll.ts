import type { Attribute } from '@generated';
import random from '@helpers/random';
import { useStore } from '@store';
import assert from 'assert';

const range = (a: number, b: number) =>
  Math.floor(random() * (b - a + 1)) + a;

const dadoRegex = /(\d+)?\.(\d+)/g;
const attrRegex = /([A-Z]{3})/g;

const replaceFn = (match: any, a: string, b: string): string => {
  const na = Number(a) || 1;
  const roll = range(1, +b) + '';

  const v =
    na < 2
      ? `${roll}`
      : `${roll} + ${replaceFn(false, na - 1 + '', b)}`;

  return match ? `(${v})` : v;
};

export const getRolls = (s: string) =>
  s
    .replaceAll(dadoRegex, replaceFn)
    .replaceAll(attrRegex, (_, a: Attribute) => {
      assert(a, 'Wrong Attribute');
      // @ts-ignore
      const v = useStore.getState()?.sheet?.attribute?.[a];

      return `((${v}))`;
    });
