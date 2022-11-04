import './index.scss';

import assert from 'assert';
import { render } from 'react';
import { App } from './App';

export const $main = document.querySelector('main');
assert($main, 'main element not found');

render(<App />, $main);
