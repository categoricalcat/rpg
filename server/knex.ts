import createKnex from 'knex';

const knex = createKnex({
  client: 'sqlite3',
  debug: true,
  connection: {
    filename: './db.sqlite',
  },
});

export default knex;
