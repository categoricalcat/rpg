import { Action } from "./Action";
import Message from "./Message";

export default class Command extends Message {
  command: string;
  args: string[];

  constructor(text: string) {
    if (!Command.isCommand(text)) throw new Error("Comando deve começar com /");
    super(text);

    // /r 2.3
    // /r 2.3 4.5 | r(2.3, 4.5)
    // /f wallace
    // /gritar oi arrombado
    const [command, ...args] = text.split(" ");
    if (!command) throw new Error("Comando invalido");

    this.command = command;
    this.args = args;
  }

  run() {
    Action.all[this.command]?.fn(...this.args);
  }

  static isCommand(m: string) {
    return m.startsWith("/");
  }
}
