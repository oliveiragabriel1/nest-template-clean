import { MailService } from '@/4-framework/services/mail/mail.service';

export const mailServiceInject = {
  provide: MailService,
  useFactory: () => {
    return new MailService();
  },
};
