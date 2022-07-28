import { IUserEntity, IUserEntityRelations } from '@/1-domain/entities';
import { IPagination } from '../definitions/pagination';
import { IRelation } from '../definitions/relation';
import { IWhere } from '../definitions/where';

type UserEntityKeys = keyof Omit<IUserEntity, 'password'>;

type UserEntityRelationsKeys = keyof IUserEntityRelations;

type UserUniqueWhereKeys = keyof Pick<IUserEntity, 'id' | 'email' | 'username'>;

interface IInputUpdateUser {
  updateWhere: IWhere<UserUniqueWhereKeys, IUserEntity[UserUniqueWhereKeys]>;
  newData: Partial<IUserEntity>;
}

interface IInputDeleteUser {
  deleteWhere: IWhere<UserUniqueWhereKeys, IUserEntity[UserUniqueWhereKeys]>;
}

interface IInputFindUser {
  columns: UserEntityKeys[];
  values: IUserEntity[UserEntityKeys][];
  relations?: IRelation<UserEntityRelationsKeys>;
  pagination?: IPagination;
}

interface IInputFindOneUser {
  columns: UserUniqueWhereKeys[];
  values: IUserEntity[UserUniqueWhereKeys][];
  relations?: IRelation<UserEntityRelationsKeys>;
  pagination?: IPagination;
}

interface IUserRepository {
  findAll(pagination?: IPagination): Promise<IUserEntity[]>;
  create(inputUserEntity: Omit<IUserEntity, 'id'>): Promise<IUserEntity>;
  findBy(inputFindUser: IInputFindUser): Promise<IUserEntity[]>;
  findOneBy(inputFindUser: IInputFindOneUser): Promise<IUserEntity | void>;
  update(
    inputUpdateUser: IInputUpdateUser,
  ): Promise<Partial<IUserEntity> | void>;
  delete(inputDeleteUser: IInputDeleteUser): Promise<void>;
}

export {
  UserEntityKeys,
  IInputUpdateUser,
  IInputDeleteUser,
  IUserRepository,
  UserEntityRelationsKeys,
  IInputFindUser,
  UserUniqueWhereKeys,
};
