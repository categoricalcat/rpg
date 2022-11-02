import { sync } from 'fast-glob';
import { readdirSync } from 'fs';

// old way
export const _allFiles = (p: string): string[] =>
  readdirSync(p, {
    withFileTypes: true,
  }).reduce<string[]>(
    (acc, dir) => [
      ...acc,
      ...(dir.isDirectory()
        ? _allFiles(`${p}/${dir.name}`)
        : [`${p}/${dir.name}`]),
    ],
    [],
  );

export default sync;
