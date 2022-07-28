import { VerifyTokenUseCase } from '@/2-business/usecases/authenticator/verify-token.usecase';
import { ProtectController } from '@/3-presentation/controllers/protect/protect.controller';

export const protectControllerInject = {
  provide: ProtectController,
  useFactory: (verifyTokenUseCase: VerifyTokenUseCase) => {
    return new ProtectController(verifyTokenUseCase);
  },
  inject: [VerifyTokenUseCase],
};
