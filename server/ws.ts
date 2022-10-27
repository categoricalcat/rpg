import Command from '@shared/Command';
import { OPEN, WebSocket } from 'ws';
import Message from './db/model/Message';

export const broadcast = (data: Buffer) => (c: WebSocket) => {
  console.log(data);

  if (c.readyState !== OPEN) return;
  const text = data.toString();

  const isCommand = Command.isCommand(text);

  const newText = isCommand
    ? new Command(text).run() ?? 'Invalid Command'
    : text;

  Message.create(newText, 'me', 'you').catch(console.warn);

  c.send(newText, { binary: true, compress: true });
};

export const onConnection = (socket: WebSocket) => {
  socket.on('message', broadcast);
};
