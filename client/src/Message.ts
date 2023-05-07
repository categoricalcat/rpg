import WS_TYPES from '@helpers/WS_TYPES';
import { query } from './socket';

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
  return query(WS_TYPES.NEW_MESSAGE, (sdk) =>
    sdk.CreateOneMessage({
      data: {
        text,
        receiver: connectOrReceive(receiver),
        sender: connectOrReceive(sender),
      },
    }),
  );
};
