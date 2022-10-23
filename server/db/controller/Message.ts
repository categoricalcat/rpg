import knex from '@server/knex';

class Message {
  getAll() {
    return knex('messages').select('*');
  }
}

// design pattern -> singleton
// one instance to rule them all
export default new Message();
