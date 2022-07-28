import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

interface IInputCreateTokenDto {
  id: string;
  email: string;
}

type IOutputAuthenticationDto = Either<IError, { token: string }>;

export { IInputCreateTokenDto, IOutputAuthenticationDto };
