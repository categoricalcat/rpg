import { send } from '../../client/send';

export default (...args: string[]) => {
  const text = args.join(' ').toUpperCase() + '!!!';
  const br = document.createElement('br');

  send(text, br);
};
