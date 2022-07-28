import {
  IInputReceiveMessageConsumerDto,
  IOutputReceiveMessageConsumerDto,
} from '@/2-business/types/dtos/consumer/receiver-message-consumer.dto';
import { ConsumerMessageExampleUseCase } from '@/2-business/usecases/consumer-example/consumer-message-example.usecase';
import { AbstractController } from '../abstract.controller';

export class ConsumerMessageController extends AbstractController<
  IInputReceiveMessageConsumerDto,
  IOutputReceiveMessageConsumerDto
> {
  /**
   *
   * @param consumerMessageExampleUseCase aqui recebe um caso de uso de ConsumerMessageExampleUseCase
   *
   */
  constructor(
    private readonly consumerMessageExampleUseCase: ConsumerMessageExampleUseCase,
  ) {
    super();
  }

  /**
   *
   * @param input
   * @returns
   */
  public async run(
    input: IInputReceiveMessageConsumerDto,
  ): Promise<IOutputReceiveMessageConsumerDto> {
    return await this.consumerMessageExampleUseCase.exec(input);
  }
}
