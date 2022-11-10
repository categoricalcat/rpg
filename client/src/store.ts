import type { GetSheetQuery, MessagesQuery } from '@generated';
import create from 'zustand';

type Message = MessagesQuery['messages'][0];
type Sheet = GetSheetQuery['findFirstSheet'];

interface Store {
  messages: Message[];
  sheet: Sheet;

  addMessage: (m: Message) => void;

  set: (s: Partial<Store>) => void;
}

export const useStore = create<Store>((set, state) => ({
  messages: [] as Message[],

  sheet: null,

  addMessage(m) {
    const newMessage = [...state().messages, m];

    set({ messages: newMessage });
  },

  set,
}));
