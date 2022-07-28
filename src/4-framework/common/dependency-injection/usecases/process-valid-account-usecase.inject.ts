import { ProcessValidAccountUseCase } from '@/2-business/usecases/process-valid-account-example/process-valid-account.usecase';
import { MailService } from '@/4-framework/services/mail/mail.service';

export const processValidAccountUseCaseInject = {
  provide: ProcessValidAccountUseCase,
  useFactory: (mailService: MailService) => {
    return new ProcessValidAccountUseCase(mailService);
  },
  inject: [MailService],
};
