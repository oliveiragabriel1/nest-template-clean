import { ConsumerMessageExampleUseCase } from '@/2-business/usecases/consumer-example/consumer-message-example.usecase';

export const consumerMessageExampleUseCaseInject = {
  provide: ConsumerMessageExampleUseCase,
  useFactory: () => {
    return new ConsumerMessageExampleUseCase();
  },
  inject: [],
};
