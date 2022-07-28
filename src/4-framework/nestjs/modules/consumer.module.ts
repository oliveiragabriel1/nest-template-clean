import {
  consumerMessageControllerInject,
  consumerMessageExampleUseCaseInject,
} from '@/4-framework/common/dependency-injection';
import { ConsumerRoutes } from '@/4-framework/grpc/routes/consumer.routes';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ConsumerRoutes],
  providers: [
    consumerMessageExampleUseCaseInject,
    consumerMessageControllerInject,
  ],
})
export class ConsumerModule {}
