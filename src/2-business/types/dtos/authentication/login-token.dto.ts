import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

interface IInputLoginDto {
  code: string;
}

type IOutputLoginDto = Either<IError, { token: string }>;

export { IInputLoginDto, IOutputLoginDto };
