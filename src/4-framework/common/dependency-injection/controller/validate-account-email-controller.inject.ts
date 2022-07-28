import { ValidateAccountUseCase } from '@/2-business/usecases/validate-account-example/validate-account.usecase';
import { ValidateAccountEmailController } from '@/3-presentation/controllers/validate-account/validate-account-email.controller';

export const validateAccountEmailControllerInject = {
  provide: ValidateAccountEmailController,
  useFactory: (validateAccountUseCase: ValidateAccountUseCase) => {
    return new ValidateAccountEmailController(validateAccountUseCase);
  },
  inject: [ValidateAccountUseCase],
};
