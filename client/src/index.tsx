// import ws from '@socket';
import assert from 'assert';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
// import { App } from './App';

export const $main = document.querySelector('main');
assert($main, 'main element not found');

const root = createRoot($main);

// console.log(ws);

root.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      {/* <App /> */}
      asdf
    </Suspense>
  </StrictMode>,
);
