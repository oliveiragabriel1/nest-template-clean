import {
  InputUserEntity,
  IUserEntity,
} from '@/1-domain/entities/user/user.entity';
import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

interface IInputCreateUserDto extends Omit<InputUserEntity, 'password'> {
  password?: string;
  passwordConfirmation?: string;
}

type IOutputCreateUserDto = Either<IError, IUserEntity>;

export { IInputCreateUserDto, IOutputCreateUserDto };
