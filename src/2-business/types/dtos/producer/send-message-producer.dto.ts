import { Either } from '@/shared/either';
import { IError } from '@/shared/error';

interface IInputSendMessageProducerDto {
  message: string;
}

type IOutputSendMessageProducerDto = Either<
  IError,
  {
    message: string;
  }
>;

export { IInputSendMessageProducerDto, IOutputSendMessageProducerDto };
