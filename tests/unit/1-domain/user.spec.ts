import { UserEntity } from '@/1-domain/entities';
import { fakeCreateUserEntity } from '@/tests/mock/fakeUserEntity';

describe('User entity', () => {
  describe('Create method', () => {
    test('Should create a user entity', () => {
      const userEntity = UserEntity.create(fakeCreateUserEntity);
      expect(userEntity).toBeDefined();
    });
  });

  describe('Update method', () => {
    test('Should update a user entity', () => {
      const userEntity = UserEntity.create(fakeCreateUserEntity);

      const newPropsUserEntity = UserEntity.update({
        username: 'My new name',
        email: 'mynewemail@email.com',
      });

      Object.assign(userEntity, newPropsUserEntity);

      expect(userEntity).toMatchObject(newPropsUserEntity);
    });
  });
});
