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

prisma.user
  .upsert({
    create: {
      name: 'Wallace',
    },
    update: {},
    where: {
      name: 'Wallace',
    },
  })
  .then(console.log)
  .catch(console.error);
