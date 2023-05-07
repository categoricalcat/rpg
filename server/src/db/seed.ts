import type { PrismaClient } from '@prisma/client';

export default (prisma: PrismaClient) =>
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
      user: {
        connectOrCreate: {
          where: {
            name: 'me',
          },
          create: {
            name: 'me',
          },
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
    update: {
      user: {
        connectOrCreate: {
          where: {
            name: 'me',
          },
          create: {
            name: 'me',
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
          {
            description:
              'A ball filled with explosive or combustible material, used as a projectile to injure the enemy by explosion or to set fire to their works.',
            name: 'FireBall',
            type: 'SPELL',
            exertion: '6.6 + PWR',
            photo:
              'https://w7.pngwing.com/pngs/1002/631/png-transparent-fireball-cinnamon-whisky-asteroid-s-leaf-orange-computer-wallpaper.png',
          },
        ],
      },
    },
    where: {
      name: 'Dhurvok',
    },
  });
