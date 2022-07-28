import { IError } from '@/shared/error';

export class CacheErrors extends IError {
  /**
   * Erro quando o serviço de cache não estiver conectado
   * @returns {IError}
   */
  public static notConnected(): IError {
    const cacheError = new CacheErrors({
      code: 500,
      body: {
        code: 'CE-001',
        message: 'Not connected!',
        shortMessage: 'notConnected!',
      },
    });

    return cacheError;
  }
  /**
   * Erro genérico no serviço de cache
   * @returns {IError}
   */
  public static internalServerError(): IError {
    const cacheError = new CacheErrors({
      code: 500,
      body: {
        code: 'CE-001',
        message: 'Internal server error in service cache!',
        shortMessage: 'internalServerError!',
      },
    });

    return cacheError;
  }
}
