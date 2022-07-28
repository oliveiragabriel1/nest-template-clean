import { ProducerMessageExampleService } from '@/4-framework/services/producer/producer-message.service';

export const producerMessageExampleServiceInject = {
  provide: ProducerMessageExampleService,
  useFactory: () => {
    return new ProducerMessageExampleService();
  },
};
