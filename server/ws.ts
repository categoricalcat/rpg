// import Command from '@shared/Command';
import { Server } from 'socket.io';
import { server } from './config';
import Message from './db/model/Message';

export const io = new Server(server);
io.listen(server);

// export const broadcast = (data: Buffer) => (c: WebSocket) => {
//   console.log(data);

//   if (c.readyState !== OPEN) return;
//   const text = data.toString();

//   const isCommand = Command.isCommand(text);

//   const newText = isCommand
//     ? new Command(text).run() ?? 'Invalid Command'
//     : text;

//   Message.create(newText, 'me', 'you').catch(console.warn);

//   c.send(newText, { binary: true, compress: true });
// };

io.on('connection', (socket) => {
  socket.on('message', (m: Message) => {
    console.log(m);
    socket.broadcast.emit('message', m);
  });
});
