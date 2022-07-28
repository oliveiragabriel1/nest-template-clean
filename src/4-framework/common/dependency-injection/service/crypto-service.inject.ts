import { CryptoService } from '@/4-framework/services/crypto/crypto.service';

export const cryptoServiceInject = {
  provide: CryptoService,
  useFactory: () => {
    return new CryptoService();
  },
};
