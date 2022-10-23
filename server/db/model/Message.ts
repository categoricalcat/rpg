import knex from '@server/knex';

class Message {
  text: string;
  sender: string;
  receiver: string;

  constructor(text: string, sender: string, receiver: string) {
    this.text = text.trim();
    this.sender = sender.trim();
    this.receiver = receiver.trim();
  }

  create() {
    return knex('messages').insert(this);
  }

  static dropTable() {
    return knex.schema.dropTableIfExists('messages');
  }

  static createTable() {
    return knex.schema.createTable('messages', function (table) {
      table.increments().notNullable();
      table.text('text').notNullable();
      table.text('sender', 'tinytext').notNullable();
      table.text('receiver', 'tinytext').notNullable();
      table.timestamps(true, true, true);
    });
  }
}

export default Message;
