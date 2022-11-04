import 'preact/debug';
import assert from 'assert';
import { render } from 'react';

export const $main = document.querySelector('main');
assert($main, 'main element not found');

render(<h1>Hello, world!</h1>, $main);
