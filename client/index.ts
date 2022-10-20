import Message from './Message';

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
