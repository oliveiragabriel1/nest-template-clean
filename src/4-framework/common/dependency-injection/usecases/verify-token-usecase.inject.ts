import { VerifyTokenUseCase } from '@/2-business/usecases/authenticator/verify-token.usecase';
import { AuthenticatorService } from '@/4-framework/services/login/authenticator.service';

export const verifyTokenUseCase = {
  provide: VerifyTokenUseCase,
  useFactory: (authenticatorService: AuthenticatorService) => {
    return new VerifyTokenUseCase(authenticatorService);
  },
  inject: [AuthenticatorService],
};
