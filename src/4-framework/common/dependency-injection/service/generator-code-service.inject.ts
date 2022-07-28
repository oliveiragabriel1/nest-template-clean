import { GeneratorCodeService } from '@/4-framework/services/code/generator-code.service';

export const generatorCodeServiceInject = {
  provide: GeneratorCodeService,
  useFactory: () => {
    return new GeneratorCodeService();
  },
};
