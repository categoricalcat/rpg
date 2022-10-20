import Action from './Action';
import Message from './Message';

export default class Command extends Message {
  command: string;
  args: string[];

  constructor (text: string) {
    if (!Command.isCommand(text)) { throw new Error('Comando deve começar com /'); }

    super(text);

    const [command, ...args] = text.split(' ');
    if (!command) throw new Error('Comando invalido');

    this.command = command;
    this.args = args;
  }

  run = () => {
    Action.all[this.command]?.fn(...this.args);
  };

  static isCommand (m: string) {
    return m.startsWith('/');
  }
}
