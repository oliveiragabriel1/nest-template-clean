import { ValidateAccountUseCase } from '@/2-business/usecases/validate-account-example/validate-account.usecase';
import { GeneratorCodeService } from '@/4-framework/services/code/generator-code.service';
import { ValidateEmailQueueService } from '@/4-framework/services/queue/validate-email-queue.service';

export const validateAccountUseCaseInject = {
  provide: ValidateAccountUseCase,
  useFactory: (
    validateEmailQueueService: ValidateEmailQueueService,
    generatorCodeService: GeneratorCodeService,
  ) => {
    return new ValidateAccountUseCase(
      validateEmailQueueService,
      generatorCodeService,
    );
  },
  inject: [ValidateEmailQueueService, GeneratorCodeService],
};
