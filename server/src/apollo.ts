import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import prisma from './db/index.js';
import { resolvers } from '@generated/typegraphql/index.js';

const schema = await buildSchema({
  resolvers,
  validate: false,
});

const apollo = new ApolloServer({
  schema,
});

const { url } = await startStandaloneServer(apollo, {
  context: async () => ({ prisma }),
  listen: {
    port: 9999,
  },
});

export default url;
