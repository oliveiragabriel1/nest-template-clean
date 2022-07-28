import { IProducerMessageService } from '@/2-business/services/producer/producer-message.service';
import {
  InputServiceProducer,
  OutputServiceProducer,
} from '@/2-business/types';
import {
  IInputSendMessageProducerDto,
  IOutputSendMessageProducerDto,
} from '@/2-business/types/dtos/producer/send-message-producer.dto';
import { left, right } from '@/shared/either';
import { IError } from '@/shared/error';
import { IAbstractUseCase } from '../abstract.usecase';

export class SendMessageProducerUseCase
  implements
    IAbstractUseCase<
      IInputSendMessageProducerDto,
      IOutputSendMessageProducerDto
    >
{
  /**
   * Construtor para injetar dependências
   * @param producerMessageExampleService
   */
  constructor(
    private readonly producerMessageExampleService: IProducerMessageService<
      InputServiceProducer,
      OutputServiceProducer
    >,
  ) {}

  /**
   * Este método é para fazer envio de mensage
   * @param {IInputSendMessageProducerDto} input - valor passado para enviar mensagem
   * @returns {Promise<IOutputSendMessageProducerDto>}
   */
  public async exec(
    input: IInputSendMessageProducerDto,
  ): Promise<IOutputSendMessageProducerDto> {
    const result = await this.producerMessageExampleService.sendMessage(
      input.message,
    );
    return result instanceof IError ? left(result) : right(result);
  }
}
