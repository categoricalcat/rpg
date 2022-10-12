export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

const $input = $("#chat") as HTMLInputElement | null;
if (!$input) throw new Error("Nao achou input");

class Command {
  static isCommand(m: string) {
    return m.startsWith("/");
  }
}

class Message {
  text: string;

  constructor(text: string) {
    this.text = text.trim();
  }
}

$input.addEventListener("keydown", (e) => {
  if (e.code !== "Enter") return;

  const message = new Message($input.value);
  const isCommand = Command.isCommand(message.text);

  if (isCommand) {
    const command = new Command();

    return console.log("command", command);
  }

  console.log("enviado", message);
});
