import { SendMessageProducerUseCase } from '@/2-business/usecases/producer-example/send-message-producer.usecase';
import { ConsumerMessageController } from '@/3-presentation/controllers/consumer/consumer-message.controller';
import { ProducerMessageController } from '@/3-presentation/controllers/producer/producer-message.controller';

export const producerMessageControllerInject = {
  provide: ProducerMessageController,
  useFactory: (consumerMessageExampleUseCase: SendMessageProducerUseCase) => {
    return new ConsumerMessageController(consumerMessageExampleUseCase);
  },
  inject: [SendMessageProducerUseCase],
};
