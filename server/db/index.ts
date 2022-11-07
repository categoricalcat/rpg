import dotenv from 'dotenv';

import { PrismaClient } from '@prisma/client';
dotenv.config();

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
});

prisma
  .$connect()
  .then(() => console.log('\nConnected to database\n'))
  .catch(console.error);

export default prisma;
