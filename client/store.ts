import type Message from '@server/db/model/Message';
import create from 'zustand';

interface Store {
  messages: Message[];

  addMessage: (m: Message) => void;

  set: (s: Partial<Store>) => void;
}

export const useStore = create<Store>((set, state) => ({
  messages: [] as Message[],

  addMessage(m) {
    const newMessage = [...state().messages, m];

    set({ messages: newMessage });
  },

  set,
}));
