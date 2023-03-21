import dotenv from 'dotenv';

import { PrismaClient } from '@prisma/client';
import sheet from './seed';
dotenv.config();

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn'],
  errorFormat: 'pretty',
});

prisma
  .$connect()
  .then(() => console.log('\nConnected to database\n'))
  .then(() =>
    sheet(prisma)
      .then(() => prisma.sheet.findFirst())
      .then(console.log),
  )
  .catch(console.error);

export default prisma;
