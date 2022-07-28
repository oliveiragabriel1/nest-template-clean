import { IError } from '@/shared/error';

class ValidationErrors extends IError {
  /**
   * This method return a default message error com statusCode 400
   * @param errorMessages - error messages from abstract controller
   * @returns {ValidationErrors}
   */
  public static default(errorMessages: any) {
    const validationError = new ValidationErrors({
      code: 400,
      body: {
        code: 'VE-001',
        message: errorMessages,
        shortMessage: 'validationError',
      },
    });
    return validationError;
  }
}

export { ValidationErrors };
