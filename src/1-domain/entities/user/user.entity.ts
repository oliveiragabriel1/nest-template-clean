import { ITimestamps } from '../../definitions';
import { AbstractEntity } from '../abstract.entity';
import { IUserStatusEntity } from './user-status.entity';

interface IUserEntityRelations {
  userStatus: IUserStatusEntity;
}

interface IUserEntity extends ITimestamps, IUserEntityRelations {
  id?: string;
  username: string;
  email: string;
  birthday: string;
  password: string;
}

type InputUserEntity = Pick<
  IUserEntity,
  'username' | 'email' | 'birthday' | 'password' | 'userStatus'
>;

class UserEntity extends AbstractEntity<IUserEntity> {
  /**
   * Static function to create a new UserEntity instance by
   * initializing its properties.
   * @param {InputUserEntity} props - properties to be set on the user entity
   * @returns {IUserEntity}
   */
  public static create(props: InputUserEntity): IUserEntity {
    const currentDate = new Date();

    const user = new UserEntity({
      ...props,
      id: undefined,
      createdAt: currentDate,
      updatedAt: currentDate,
      userStatus: {
        ...props.userStatus,
        id: undefined,
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    });

    return user.exportValues();
  }

  /**
   * Static function to update an existing UserEntity instance
   * @param {Partial<IUserEntity>} props - properties to be set on the user entity
   * @returns {IUserEntity}
   */
  public static update(props: Partial<IUserEntity>): IUserEntity {
    const currentDate = new Date();

    const user = new UserEntity({
      ...props,
      updatedAt: currentDate,
    } as IUserEntity);

    return user.exportValues();
  }
}

export { IUserEntity, IUserEntityRelations, InputUserEntity, UserEntity };
