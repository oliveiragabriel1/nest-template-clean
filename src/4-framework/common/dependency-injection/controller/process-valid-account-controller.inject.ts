import { ProcessValidAccountUseCase } from '@/2-business/usecases/process-valid-account-example/process-valid-account.usecase';
import { ProcesesValidAccountController } from '@/3-presentation/controllers/process-valid-account/process-valid-account.controller';

export const procesesValidAccountControllerInject = {
  provide: ProcesesValidAccountController,
  useFactory: (processValidAccountUseCase: ProcessValidAccountUseCase) => {
    return new ProcesesValidAccountController(processValidAccountUseCase);
  },
  inject: [ProcessValidAccountUseCase],
};
