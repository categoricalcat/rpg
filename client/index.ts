import './main.scss';
import Message from './Message';
import type MessageModel from '@server/db/model/Message';
import { createImage, createP } from './elements';

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
const $main = $('main') as HTMLElement;

const $input = $<HTMLInputElement>('#message-input');
if ($input === null) throw new Error('No input found');
if ($main === null) throw new Error('No main found');

$input.addEventListener('keydown', (e) => {
  if (e.code !== 'Enter' || e.shiftKey) return;
  e.preventDefault();

  const { value } = $input;
  const msg = new Message(value);

  msg.send();
  $input.value = '';
});

const isImage = (url: string) =>
  url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null;

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

const $form = $('form') as HTMLFormElement;

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
