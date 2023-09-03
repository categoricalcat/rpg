import dotenv from 'dotenv';
import cluster from 'node:cluster';

import { PrismaClient } from '@prisma/client';
import seed from './seed.js';
dotenv.config();

const prisma = new PrismaClient({
  log: cluster.isPrimary ? ['query', 'info', 'warn'] : [],
  errorFormat: 'pretty',
});

if (cluster.isPrimary) {
  prisma
    .$connect()
    .then(() => console.log('\nConnected to database\n'))
    .then(() =>
      seed(prisma).then(() => prisma.sheet.findFirst()),
    )
    .catch(console.error);
} else {
  prisma.$connect();
}

export default prisma;
