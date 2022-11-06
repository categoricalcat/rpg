import Command from '@shared/Command';
import { OPEN, WebSocket } from 'ws';
import Message from './db/model/Message';

export const broadcast = (c: WebSocket) => (data: Buffer) => {
  if (c.readyState !== OPEN) return;

  const text = data.toString();

  const isCommand = Command.isCommand(text);

  const newText = isCommand
    ? new Command(text).run() ?? 'Invalid Command'
    : text;

  Message.create(newText, 'me', 'you')
    .then(() =>
      c.send(newText, { binary: true, compress: true }),
    )
    .catch((e) => {
      c.send('Error', { binary: true, compress: true });
      console.error(e);
    });
};

export const onConnection = (socket: WebSocket) => {
  socket.on('message', broadcast(socket));
};
