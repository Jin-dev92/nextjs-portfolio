import { IUser } from '@/services/interface/user.interface';

export interface IUserStore {
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
}