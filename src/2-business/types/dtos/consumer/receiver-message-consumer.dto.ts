import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

interface IInputReceiveMessageConsumerDto {
  message: string;
}

type IOutputReceiveMessageConsumerDto = Either<
  IError,
  {
    message: string;
  }
>;

export { IInputReceiveMessageConsumerDto, IOutputReceiveMessageConsumerDto };
