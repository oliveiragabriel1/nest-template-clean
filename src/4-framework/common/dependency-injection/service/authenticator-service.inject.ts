import { AuthenticatorService } from '@/4-framework/services/login/authenticator.service';

export const authenticatorServiceInject = {
  provide: AuthenticatorService,
  useFactory: () => {
    return new AuthenticatorService();
  },
};
