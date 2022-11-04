import socket from './socket';

export default class Message {
  text: string;

  constructor(text: string) {
    this.text = text.trim();
  }

  send() {
    socket.send(this.text);
  }
}
