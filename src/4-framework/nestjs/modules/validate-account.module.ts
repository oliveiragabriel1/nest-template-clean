import { validateAccountEmailControllerInject } from '@/4-framework/common/dependency-injection/controller/validate-account-email-controller.inject';
import { generatorCodeServiceInject } from '@/4-framework/common/dependency-injection/service/generator-code-service.inject';
import { validateEmailQueueServiceInject } from '@/4-framework/common/dependency-injection/service/validate-queue-service.inject';
import { validateAccountUseCaseInject } from '@/4-framework/common/dependency-injection/usecases/validate-account.usecase.inject';
import { ValidationRoutes } from '@/4-framework/rest/routes/validation-account.routes';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ValidationRoutes],
  providers: [
    generatorCodeServiceInject,
    validateEmailQueueServiceInject,
    validateAccountUseCaseInject,
    validateAccountEmailControllerInject,
  ],
})
export class ValidationAccountModule {}
