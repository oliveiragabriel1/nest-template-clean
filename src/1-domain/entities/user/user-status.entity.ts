import { IStatus, ITimestamps } from '../../definitions';

interface IUserStatusEntity extends IStatus, ITimestamps {
  id?: string;
}

export { IUserStatusEntity };
