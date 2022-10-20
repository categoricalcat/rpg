import ws from './ws';

export default class Message {
  text: string;

  constructor(text: string) {
    this.text = text.trim();
  }

  send() {
    ws.send(this.text);
  }
}
