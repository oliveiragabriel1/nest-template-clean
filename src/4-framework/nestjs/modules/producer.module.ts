import {
  producerMessageControllerInject,
  producerMessageExampleServiceInject,
  sendMessageProducerUseCaseInject,
} from '@/4-framework/common/dependency-injection';
import { ProducerRoutes } from '@/4-framework/rest/routes/producer.routes';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ProducerRoutes],
  providers: [
    producerMessageExampleServiceInject,
    sendMessageProducerUseCaseInject,
    producerMessageControllerInject,
  ],
})
export class ProducerModule {}
