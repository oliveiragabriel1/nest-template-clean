import { IError } from '@/shared/error';

export class AuthenticationErrors extends IError {
  /**
   * Erro quando quando as credencias estão incorretaas
   * @returns {IError}
   */
  public static invalidCredentials(): IError {
    const authenticationError = new AuthenticationErrors({
      code: 401,
      body: {
        code: 'AE-001',
        message: 'Email or password wrong',
        shortMessage: 'wrongCredentials',
      },
    });

    return authenticationError;
  }
  /**
   * Erro quando o token está inválido
   * @returns {IError}
   */
  public static invalidToken(): IError {
    const authenticationError = new AuthenticationErrors({
      code: 423,
      body: {
        code: 'AE-002',
        message: 'Token is not valid',
        shortMessage: 'wrongToken',
      },
    });

    return authenticationError;
  }
  /**
   * Erro quando tenta validadar o token
   * @returns {$IError}
   */
  public static erroInValidToken(): IError {
    const authenticationError = new AuthenticationErrors({
      code: 500,
      body: {
        code: 'AE-003',
        message: 'Unable to validate token!',
        shortMessage: 'unableValidToken',
      },
    });

    return authenticationError;
  }

  /**
   * Erro por não conseguir criar o token
   * @returns {IError}
   */
  public static tokenCreationError(): IError {
    const authenticationError = new AuthenticationErrors({
      code: 500,
      body: {
        code: 'AE-004',
        message: 'Token creation error',
        shortMessage: 'tokenCreationError',
      },
    });

    return authenticationError;
  }

  /**
   * Erro por não conseguir validar conta Google
   * @returns {IError}
   */
  public static notPossibleValidAccountGoogle(): IError {
    const authenticationError = new AuthenticationErrors({
      code: 500,
      body: {
        code: 'AE-005',
        message: 'Unable to validate your Google account!',
        shortMessage: 'notPossibleValidAccountGoogleError',
      },
    });

    return authenticationError;
  }

  /**
   * Erro por que a conta Google não está valida
   * @returns {IError}
   */
  public static notValidAccountGoogle(): IError {
    const authenticationError = new AuthenticationErrors({
      code: 500,
      body: {
        code: 'AE-006',
        message: 'Your Google account does not validate!',
        shortMessage: 'notValidAccountGoogleError',
      },
    });

    return authenticationError;
  }
}
