import Fastify from 'fastify';
import cors from 'cors';
import middie from '@fastify/middie';

export const fastify = Fastify({
  logger: true,
});

await fastify.register(middie, {
  hook: 'onRequest', // default
});

fastify.use(cors());

fastify.get('/', (_, res) => {
  res.send('approved');
});

fastify.use((_, __, next) => {
  console.log('request for worker ' + process.pid);
  setTimeout(next, 1000);
});

export default fastify.listen({ port: 9876 });
