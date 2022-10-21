import Action from './Action';

export default class Command {
  command: string;
  args: string[];

  constructor(text: string) {
    if (!Command.isCommand(text)) {
      throw new Error('Comando deve começar com /');
    }

    const [command, ...args] = text.split(' ');
    if (!command) throw new Error('Comando invalido');

    this.command = command;
    this.args = args;
  }

  run = () => {
    Action.all[this.command]?.fn(...this.args);
  };

  static isCommand(m: string) {
    return m.startsWith('/');
  }
}
