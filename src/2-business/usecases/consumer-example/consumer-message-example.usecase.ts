import {
  IInputReceiveMessageConsumerDto,
  IOutputReceiveMessageConsumerDto,
} from '@/2-business/types/dtos/consumer/receiver-message-consumer.dto';
import { right } from '@/shared/either';
import { IAbstractUseCase } from '../abstract.usecase';

export class ConsumerMessageExampleUseCase
  implements
    IAbstractUseCase<
      IInputReceiveMessageConsumerDto,
      IOutputReceiveMessageConsumerDto
    >
{
  /**
   * Este método é para retorna uma mensagem modificada
   * @param {IInputReceiveMessageConsumerDto} input - valor passado para retorna mensagem
   * @returns {Promise<IOutputReceiveMessageConsumerDto>}
   */
  public async exec(
    input: IInputReceiveMessageConsumerDto,
  ): Promise<IOutputReceiveMessageConsumerDto> {
    return await Promise.resolve(
      right({ message: input.message.toUpperCase() }),
    );
  }
}
