import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

interface IInputProcessValidAccountEmailDto {
  to: string;
  text: string;
  from: string;
  subject: string;
}

type IOutputProcessValidAccountEmailDto = Either<IError, void>;

export {
  IInputProcessValidAccountEmailDto,
  IOutputProcessValidAccountEmailDto,
};
