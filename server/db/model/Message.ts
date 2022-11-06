import knex from '@server/knex';

class Message {
  text: string;
  sender: string;
  receiver: string;
  createdAt: string = new Date().toISOString();

  constructor(text: string, sender: string, receiver: string) {
    this.text = text.trim();
    this.sender = sender.trim();
    this.receiver = receiver.trim();
  }

  static async create(
    text: string,
    sender: string,
    receiver: string,
  ) {
    return await knex('messages')
      .insert(new Message(text, sender, receiver))
      .returning('*')
      .then((ms) => ms[0]);
  }
}

export default Message;
