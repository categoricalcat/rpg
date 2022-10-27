/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { getRandomValues } from 'crypto';

/**
 * Random number between 0 and 1
 */
const random = () =>
  getRandomValues(new Uint32Array(1))[0]! / 2 ** 32;

export default random;
