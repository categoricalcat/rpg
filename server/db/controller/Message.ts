import prisma from '..';

class Message {
  getAll() {
    return prisma.message.findMany({});
  }
}

// design pattern -> singleton
// one instance to rule them all
export default new Message();
