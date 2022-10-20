import { send } from '../send';
import roll from './roll';
import yell from './yell';

type FN = (...args: any[]) => void;

class Action<F extends FN> {
  static all: Record<string, Action<FN>> = {};

  name: string;
  fn: F;

  constructor(name: string, fn: F) {
    this.name = '/' + name;
    this.fn = fn;

    Action.all[this.name] = this;
  }

  static create<F extends FN>(name: string, fn: F) {
    return new Action(name, fn);
  }
}

Action.create('!', yell);
Action.create('r', roll);
Action.create('f', () => send('ficha aberta'));

export default Action;
