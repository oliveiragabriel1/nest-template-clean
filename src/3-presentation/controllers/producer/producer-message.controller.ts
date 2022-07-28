import {
  IInputSendMessageProducerDto,
  IOutputSendMessageProducerDto,
} from '@/2-business/types/dtos/producer/send-message-producer.dto';
import { SendMessageProducerUseCase } from '@/2-business/usecases/producer-example/send-message-producer.usecase';
import { AbstractController } from '../abstract.controller';

export class ProducerMessageController extends AbstractController<
  IInputSendMessageProducerDto,
  IOutputSendMessageProducerDto
> {
  /**
   *
   * @param sendMessageProducerUseCase aqui recebe um caso de uso de SendMessageProducerUseCase
   *
   */
  constructor(
    private readonly sendMessageProducerUseCase: SendMessageProducerUseCase,
  ) {
    super();
  }

  /**
   *
   * @param input
   * @returns
   */
  public async run(
    input: IInputSendMessageProducerDto,
  ): Promise<IOutputSendMessageProducerDto> {
    return await this.sendMessageProducerUseCase.exec(input);
  }
}
