import { IError } from '@/shared/error';

export interface IGoogleLoginService {
  /**
   *Esse serviço está associado a operação de login do Google
   *ela é reponsável por dizer se a conta está verificada
   *se estiver é sinal que logou de forma correta, e ai vai trazer também o email
   * de quem está logados
   */
  login: (code: string) => Promise<{ valid: boolean; email: string } | IError>;
}
