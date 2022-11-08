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

export const sheet = () =>
  prisma.sheet.upsert({
    create: {
      name: 'Dhurvok',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      photo:
        'https://i.pinimg.com/474x/b3/30/e8/b330e844ef0a94faf523df4101428c28.jpg',
      attribute: {
        set: {
          STR: 5,
          DEX: 5,
          CON: 5,
          INT: 5,
          WIS: 5,
          CHA: 5,
          PWR: 5,
        },
      },
      race: {
        connectOrCreate: {
          where: {
            name: 'Human',
          },
          create: {
            name: 'Human',
            description: 'A regular human being',
            attributes: {
              set: {
                STR: 0,
                DEX: 0,
                CON: 0,
                INT: 2,
                WIS: 1,
                CHA: 2,
                PWR: 0,
              },
            },
          },
        },
      },
      items: {
        set: [
          {
            description: 'A sword',
            name: 'Sword',
            type: 'ITEM',
            exertion: '3.6 + 2',
            photo:
              'https://thumbs.dreamstime.com/b/fantasy-sword-27396061.jpg',
            modifier: {
              STR: 0,
              DEX: 0,
              CON: 0,
              INT: 2,
              WIS: 1,
              CHA: 2,
              PWR: 0,
            },
          },
        ],
      },
    },
    update: {},
    where: {
      name: 'Dhurvok',
    },
  });

export default prisma;
