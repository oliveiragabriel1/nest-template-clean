import { HasherService } from '@/4-framework/services';

export const hasherServiceInject = {
  provide: HasherService,
  useFactory: () => {
    return new HasherService();
  },
};
