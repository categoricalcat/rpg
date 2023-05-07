/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * Random number between 0 and 1
 */
const random = () =>
  crypto.getRandomValues(new Uint32Array(1))[0]! / 2 ** 32;

export default random;
