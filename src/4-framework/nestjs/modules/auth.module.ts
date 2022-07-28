import {
  createTokenUseCase,
  cryptoServiceInject,
  findOneUserUseCase,
  googleLoginServiceInject,
  hasherServiceInject,
  loginControllerInject,
} from '@/4-framework/common/dependency-injection';
import { userRepositoryInject } from '@/4-framework/common/dependency-injection/repositories/user-repository.inject';
import { authenticatorServiceInject } from '@/4-framework/common/dependency-injection/service/authenticator-service.inject';
import { AuthRoutes } from '@/4-framework/rest/routes/auth.routes';
import { Module } from '@nestjs/common';

@Module({
  controllers: [AuthRoutes],
  providers: [
    googleLoginServiceInject,
    authenticatorServiceInject,
    userRepositoryInject,
    findOneUserUseCase,
    createTokenUseCase,
    loginControllerInject,
  ],
})
export class AuthModule {}
