import {
  createTokenUseCase,
  hasherServiceInject,
} from '@/4-framework/common/dependency-injection';
import { protectControllerInject } from '@/4-framework/common/dependency-injection/controller/protect.controller.inject';
import { authenticatorServiceInject } from '@/4-framework/common/dependency-injection/service/authenticator-service.inject';
import { verifyTokenUseCase } from '@/4-framework/common/dependency-injection/usecases/verify-token-usecase.inject';
import { ProtectRoutes } from '@/4-framework/rest/routes/protect.routes';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ProtectRoutes],
  providers: [
    authenticatorServiceInject,
    hasherServiceInject,
    createTokenUseCase,
    verifyTokenUseCase,
    protectControllerInject,
  ],
})
export class ProtectModule {}
