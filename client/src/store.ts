import type { MessagesQuery } from '@generated';
import create from 'zustand';

type Message = MessagesQuery['messages'][0];

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
