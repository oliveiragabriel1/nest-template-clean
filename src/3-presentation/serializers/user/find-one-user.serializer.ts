import { IUserEntity } from '@/1-domain/entities';
import { UserUniqueWhereKeys } from '@/2-business/repositories';
import { IInputFindOneUserDto } from '@/2-business/types';
import { IsNotEmptyObject } from 'class-validator';

export class FindOneUserSerializer implements IInputFindOneUserDto {
  @IsNotEmptyObject()
  public keys: UserUniqueWhereKeys[];

  @IsNotEmptyObject()
  public values: IUserEntity[UserUniqueWhereKeys][];
}
