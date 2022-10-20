export default class Message {
  text: string;

  constructor (text: string) {
    this.text = text.trim();
  }

  send () {
    console.log('mensagem enviada ->', this.text);
  }
}
