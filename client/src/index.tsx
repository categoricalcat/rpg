import assert from 'assert';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import Sheet from './component/Sheet';

export const $main = document.querySelector('main');
assert($main, 'main element not found');

const root = createRoot($main);

root.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <Sheet />

      <App />
    </Suspense>
  </StrictMode>,
);
