import { SendMessageProducerUseCase } from '@/2-business/usecases/producer-example/send-message-producer.usecase';
import { ProducerMessageExampleService } from '@/4-framework/services/producer/producer-message.service';

export const sendMessageProducerUseCaseInject = {
  provide: SendMessageProducerUseCase,
  useFactory: (
    producerMessageExampleService: ProducerMessageExampleService,
  ) => {
    return new SendMessageProducerUseCase(producerMessageExampleService);
  },
  inject: [ProducerMessageExampleService],
};
