import { IError } from '@/shared/error';

export interface IAuthenticatorService {
  /**
   * Aqui vai ser usado para gerar o token
   */
  sign: (payload: { id: string; email: string }) => Promise<{ token: string }>;
  /**
   * Aqui vai ser usado para validar o token
   */
  verify: (token: string) => Promise<{ id: string; email: string } | IError>;
}
