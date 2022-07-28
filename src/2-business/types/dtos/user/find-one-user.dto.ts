import { UserUniqueWhereKeys } from '@/2-business/repositories';
import { IUserEntity } from '@/1-domain/entities';
import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

interface IInputFindOneUserDto {
  keys: UserUniqueWhereKeys[];
  values: IUserEntity[UserUniqueWhereKeys][];
}

type IOutputFindOneUserDto = Either<IError, IUserEntity>;

export { IInputFindOneUserDto, IOutputFindOneUserDto };
