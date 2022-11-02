import assert from 'assert';

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
export const $main = $('main') as HTMLElement;
export const $form = $('form') as HTMLFormElement;
export const $input = $('#message-input') as HTMLInputElement;

assert($main, 'No main found');
assert($form, 'No form found');
assert($input, 'No input found');
