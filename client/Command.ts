import Message from "./Message";

// export type ParsedCommand = [command: string, ...args: string[]];

// /r 2.3
// /r 2.3 4.5 | r(2.3, 4.5)
// /f wallace
// /gritar oi arrombado
export default class Command extends Message {
  command: string;
  args: string[];

  constructor(text: string) {
    if (!Command.isCommand(text)) throw new Error("Comando deve começar com /");
    super(text);

    const [command, ...args] = text.split(" ");
    if (!command) throw new Error("Comando invalido");

    this.command = command;
    this.args = args;
  }

  run() {
    if (this.command === "/r") this.r();
    if (this.command === "/f") this.f();
    if (this.command === "/gritar") this.gritar();
  }

  static isCommand(m: string) {
    return m.startsWith("/");
  }

  gritar() {
    console.log("gritando");
  }

  r() {
    console.log("dados rolados");
  }

  f() {
    console.log("ficha aberta");
  }
}
