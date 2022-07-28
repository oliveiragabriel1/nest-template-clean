import rabbitMQProducerFactory from '@/4-framework/factory/rabbitmq-producer.factory';
import { ValidateEmailQueueService } from '@/4-framework/services/queue/validate-email-queue.service';
import Queue from '@/shared/enums/queue.enums';

export const validateEmailQueueServiceInject = {
  provide: ValidateEmailQueueService,
  useFactory: () => {
    return new ValidateEmailQueueService(
      rabbitMQProducerFactory(Queue.VALIDATE_EMAIL_QUEUE),
    );
  },
};
