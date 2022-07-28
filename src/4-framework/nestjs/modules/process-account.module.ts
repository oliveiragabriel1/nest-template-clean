import {
  mailServiceInject,
  procesesValidAccountControllerInject,
  processValidAccountUseCaseInject,
} from '@/4-framework/common/dependency-injection';
import { ProcessValidationAccountRoutes } from '@/4-framework/rabbitmq/routes/validate-account.routes';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ProcessValidationAccountRoutes],
  providers: [
    mailServiceInject,
    processValidAccountUseCaseInject,
    procesesValidAccountControllerInject,
  ],
})
export class ProcessValidationAccountModule {}
