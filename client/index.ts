import './main.scss';
import Message from './Message';
import type MessageModel from '@server/db/model/Message';

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

const $input = $<HTMLInputElement>('#chat');
if ($input === null) throw new Error('Nao achou input');

$input.addEventListener('keydown', (e) => {
  if (e.code !== 'Enter' || e.shiftKey) return;
  e.preventDefault();

  const value = $input.value;
  const msg = new Message(value);

  msg.send();
});

fetch('http://localhost:9876/messages')
  .then(async (r) => (await r.json()) as MessageModel[])
  .then((ms) => {
    ms.forEach((m) => {
      document.body.prepend(
        m.createdAt,
        ' | ',
        m.text,
        document.createElement('br'),
      );
    });
  })
  .catch(console.warn);
