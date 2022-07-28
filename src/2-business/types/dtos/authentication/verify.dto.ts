import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

export interface IInputVerifyAuthenticateDTO {
  token: string;
}

export type IOutputVerifyAuthenticateDTO = Either<
  IError,
  {
    id: string;
    email: string;
  }
>;
