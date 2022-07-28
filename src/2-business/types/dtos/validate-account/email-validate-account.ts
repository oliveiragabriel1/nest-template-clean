import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

interface IInputValidateAccountEmailDto {
  toEmail: string;
}

type IOutputValidateAccountEmailDto = Either<IError, void>;

export { IInputValidateAccountEmailDto, IOutputValidateAccountEmailDto };
