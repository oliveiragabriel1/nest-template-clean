import { InputUserEntity } from '../1-domain/entities';

export const fakeCreateUserEntity: InputUserEntity = {
  username: 'fake full name',
  email: 'fake@email.com',
  birthday: '28/09/1997',
  password: 'fake_password',
  userStatus: {
    id: undefined,
    isBlocked: false,
    isDeleted: false,
    isPermanentBanned: false,
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: new Date(),
  },
};
