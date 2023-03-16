import prisma from '..';

class Message {
  text: string;
  sender: string;
  receiver: string;
  createdAt: string = new Date().toISOString();

  constructor(text: string, sender: string, receiver: string) {
    this.text = text.trim();
    this.sender = sender.trim();
    this.receiver = receiver.trim();
  }

  static async create(
    text: string,
    sender: string,
    receiver: string,
  ) {
    return await prisma.message.create({
      data: {
        text,
        sender: {
          connectOrCreate: {
            create: {
              name: sender,
            },
            where: {
              name: sender,
            },
          },
        },
        receiver: {
          connectOrCreate: {
            create: {
              name: receiver,
            },
            where: {
              name: receiver,
            },
          },
        },
      },
    });
  }
}

export default Message;
