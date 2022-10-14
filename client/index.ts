import Command from "./Command";
import Message from "./Message";

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

const $input = $("#chat") as HTMLInputElement | null;
if (!$input) throw new Error("Nao achou input");

$input.addEventListener("keydown", (e) => {
  if (e.code !== "Enter" || e.shiftKey) return;
  e.preventDefault();

  const value = $input.value;
  const text: Message | Command = Command.isCommand(value)
    ? new Command(value)
    : new Message(value);

  if (text instanceof Command) text.run();

  text.send();
});
