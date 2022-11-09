import socket, { query } from './socket';

export const handlerJSON = async <R = Record<string, string>>(
  r: Response,
): Promise<R> =>
  await r
    .clone()
    .json()
    .catch(async () => await r.text());

const connectOrReceive = (name: string) => ({
  connectOrCreate: {
    create: {
      name,
    },
    where: {
      name,
    },
  },
});

export const send = (
  text: string,
  sender: string,
  receiver: string,
) => {
  return query('NEW_MESSAGE', (sdk) =>
    sdk.CreateOneMessage({
      data: {
        text: text,
        receiver: connectOrReceive(receiver),
        sender: connectOrReceive(sender),
      },
    }),
  );
};
