import { Knex } from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('messages', (table) => {
    table.increments().notNullable();
    table.text('text').notNullable();
    table.text('sender', 'tinytext').notNullable();
    table.text('receiver', 'tinytext').notNullable();
    table.timestamps(true, true, true);
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('messages');
};
