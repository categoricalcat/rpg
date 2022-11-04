import './index.scss';

import Message from './Message';
import type MessageModel from '@server/db/model/Message';
import { createImage, createP } from './createElement';
import { $input, $form, $main } from './$s';
import { isImage } from './helpers/isImage';

$input.addEventListener('keydown', (e) => {
  if (e.code !== 'Enter' || e.shiftKey) return;
  e.preventDefault();

  const { value } = $input;
  const msg = new Message(value);

  msg.send();
  $input.value = '';
});

$form.addEventListener('input', (e) => {
  const target = e.target as HTMLInputElement;
  const body = new FormData($form);

  if (target.name !== 'image') return;

  const file = target?.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.addEventListener('loadend', () => {
    const r = reader.result as string;

    const img = createImage(r);
    target.parentElement?.append(img);
  });

  fetch('http://localhost:9876/upload', {
    method: 'POST',
    body,
  }).catch(console.warn);
});

window.onload = () => {
  fetch('http://localhost:9876/messages')
    .then(async (r) => (await r.json()) as MessageModel[])
    .then((ms) => {
      ms.reverse()
        .slice(0, 5)
        .forEach((m) => {
          const date = new Date(m.createdAt).toLocaleString();
          const message = m.text;
          const br = document.createElement('br');

          const element = isImage(message)
            ? createImage(message)
            : createP(message);

          $main.prepend(date, ' | ', element, br);
        });
    })
    .catch(console.warn);
};
