import assert from "assert";
import random from "./random";

const enviar = document.body.prepend.bind(document.body);

type FN = (...args: any[]) => void;

export class Action<F extends FN> {
  static all: Record<string, Action<FN>> = {};

  name: string;
  fn: F;

  constructor(name: string, fn: F) {
    this.name = "/" + name;
    this.fn = fn;

    Action.all[this.name] = this;
  }
}

export const g = new Action("g", (...args: string[]) => {
  const text = args.join(" ").toUpperCase() + "!!!";
  const br = document.createElement("br");

  enviar(text, br);
});

const range = (a: number, b: number) => Math.floor(random() * (b - a + 1)) + a;

// TODO
// 1.6 * 2
// 1.6 + 1.6
// 2.3 / 3
export const r = new Action("r", (dado: string) => {
  const br = document.createElement("br");
  const [vezes, lados] = dado?.split(".");
  assert(
    vezes &&
      lados &&
      Number.isSafeInteger(+vezes) &&
      Number.isSafeInteger(+lados),
    "Dado inválido"
  );

  const rolar = () => range(1, +lados);

  const dados: number[] = [...Array(+vezes)].map(() => rolar());
  const total = dados.reduce((a, b) => a + b, 0);

  const format = `{${dados}} = ${total}`;

  enviar(format, br);
});

export const f = new Action("f", () => {
  enviar("ficha aberta");
});
