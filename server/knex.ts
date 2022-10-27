import createKnex from 'knex';

const knex = createKnex({
  client: 'sqlite3',
  // debug: true,
  useNullAsDefault: true,
  connection: {
    filename: './db.sqlite',
  },
});

export default knex;
