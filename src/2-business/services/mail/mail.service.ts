import { ValueMail } from '@/2-business/types';
import { IError } from '@/shared/error';

export interface IMailService {
  /**
   * Aqui será implmentado para fazer envio de um e-mail
   * @param input
   */
  sendMail(input: ValueMail): Promise<void | IError>;
}
