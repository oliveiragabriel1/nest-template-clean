import { FindOneUserUseCase } from '@/2-business/usecases';
import { CreateTokenUseCase } from '@/2-business/usecases/authenticator/create-token.usecase';
import { LoginController } from '@/3-presentation/controllers/auth/login.controller';
import { GoogleLoginService } from '@/4-framework/services/login/google.login.service';

export const loginControllerInject = {
  provide: LoginController,
  useFactory: (
    findOneUserUseCase: FindOneUserUseCase,
    createTokenUseCase: CreateTokenUseCase,
    googleLoginService: GoogleLoginService,
  ) => {
    return new LoginController(
      findOneUserUseCase,
      createTokenUseCase,
      googleLoginService,
    );
  },
  inject: [FindOneUserUseCase, CreateTokenUseCase, GoogleLoginService],
};
