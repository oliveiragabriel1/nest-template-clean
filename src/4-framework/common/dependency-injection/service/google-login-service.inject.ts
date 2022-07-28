import { GoogleLoginService } from '@/4-framework/services/login/google.login.service';

export const googleLoginServiceInject = {
  provide: GoogleLoginService,
  useFactory: () => {
    return new GoogleLoginService();
  },
};
