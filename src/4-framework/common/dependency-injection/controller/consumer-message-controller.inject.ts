import { ConsumerMessageExampleUseCase } from '@/2-business/usecases/consumer-example/consumer-message-example.usecase';
import { ConsumerMessageController } from '@/3-presentation/controllers/consumer/consumer-message.controller';

export const consumerMessageControllerInject = {
  provide: ConsumerMessageController,
  useFactory: (
    consumerMessageExampleUseCase: ConsumerMessageExampleUseCase,
  ) => {
    return new ConsumerMessageController(consumerMessageExampleUseCase);
  },
  inject: [ConsumerMessageExampleUseCase],
};
