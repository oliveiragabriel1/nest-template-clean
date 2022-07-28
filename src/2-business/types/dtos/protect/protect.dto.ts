import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

type IOutputProtectDto = Either<
  IError,
  {
    message: string;
  }
>;

export { IOutputProtectDto };
