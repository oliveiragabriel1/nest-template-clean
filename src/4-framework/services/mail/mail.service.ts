import { IMailService } from '@/2-business/services/mail/mail.service';
import { ValueMail } from '@/2-business/types';
import transportEmailFactory from '@/4-framework/factory/transporter-email.factor';
import { IError } from '@/shared/error';

export class MailService implements IMailService {
  /**
   * Aqui faz o envio de e-mail
   * @param input
   */
  public async sendMail(input: ValueMail): Promise<void | IError> {
    const transport = transportEmailFactory();
    await transport.sendMail({
      from: input.from,
      to: input.to,
      subject: input.subject,
      text: input.text,
      html: input.text,
    });
  }
}
