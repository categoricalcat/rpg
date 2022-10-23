import Command from '@shared/Command';
import { WebSocketServer, OPEN, type WebSocket } from 'ws';
import Message from './db/model/Message';

export const ws = new WebSocketServer({ noServer: true });

export const broadcast =
  (data: Buffer, binary: boolean) => (c: WebSocket) => {
    console.log(data);

    if (c.readyState !== OPEN) return;
    const text = data.toString();

    const isCommand = Command.isCommand(text);

    const newText = isCommand
      ? new Command(text).run() ?? 'Invalid Command'
      : text;

    const m = new Message(newText, 'sender', 'receiver');
    void m.create();

    c.send(newText, { binary, compress: true });
  };

ws.on('error', (e) => {
  console.log('WebSocket Error');
  console.error(e);
});
