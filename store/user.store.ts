import { create } from 'zustand';

import { IUserStore } from '@/store/type/interface/user-store.interface';

export const userStore = create<IUserStore>(set => ({
  currentUser: null,
  setCurrentUser: user => set(state => ({ currentUser: user }))
}));