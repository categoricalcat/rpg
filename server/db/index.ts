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

// prisma.sheet
//   .create({
//     data: {
//       name: 'Fasfaf F.',
//       description: 'O senhor do medo...',
//       attribute: {
//         set: {
//           STR: 10,
//           DEX: 10,
//           CON: 10,
//           INT: 10,
//           WIS: 10,
//           CHA: 10,
//           PWR: 10,
//         },
//       },
//       items: {
//         set: [
//           {
//             name: 'Espada',
//             description: 'Uma espada de aço',
//             type: 'ITEM',
//             exertion: '2.6 + 5 + STR',
//           },
//           {
//             name: 'Amedrontar',
//             description: 'Ameaça o inimigo',
//             type: 'SPELL',
//             exertion: '4.6 + PWR',
//           },
//         ],
//       },
//     },
//   })
//   .catch(console.error);
