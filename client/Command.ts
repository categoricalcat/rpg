import Message from "./Message";

const enviar = document.body.prepend.bind(document.body);

// type OU<A, B> = A | B;

// type FOU = (a: string, b: number) => OU<string, number>;

// export const fou: FOU = (a, b) => (true ? a : b);

type FN = (...args: any[]) => void;

class Action<F extends FN> {
  name: string;
  fn: F;

  constructor(name: string, fn: F) {
    this.name = "/" + name;
    this.fn = fn;
  }
}

const g = new Action("g", (...args: string[]) => {
  const text = args.join(" ").toUpperCase() + "!!!";
  const br = document.createElement("br");

  enviar(text, br);
});

const r = new Action("r", () => {
  enviar("dados rolados");
});
const f = new Action("f", () => {
  enviar("ficha aberta");
});

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
    if (this.command === r.name) r.fn();
    if (this.command === f.name) f.fn();
    if (this.command === g.name) g.fn(...this.args);
  }

  static isCommand(m: string) {
    return m.startsWith("/");
  }
}
