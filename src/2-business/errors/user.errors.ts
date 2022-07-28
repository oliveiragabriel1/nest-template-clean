import { IError } from '@/shared/error';

export class UsersErrors extends IError {
  /**
   * Error when the user entity could not be created
   * @returns {IError}
   */
  public static entityCreationError(): IError {
    const userErrors = new UsersErrors({
      code: 400,
      body: {
        code: 'UE-001',
        message:
          'Error during creation of the user entity, please try again later',
        shortMessage: 'entityCreationFailed',
      },
    });
    return userErrors;
  }

  /**
   * Error when the inputed email is already in use
   * @returns {IError}
   */
  public static userEmailAlreadyInUse(): IError {
    const userErrors = new UsersErrors({
      code: 409,
      body: {
        code: 'UE-002',
        message: 'This e-mail is already in use, please use another',
        shortMessage: 'entityCreationFailed',
      },
    });
    return userErrors;
  }

  /**
   * User not found in the database
   * @returns {IError}
   */
  public static userNotFound(): IError {
    const userErrors = new UsersErrors({
      code: 404,
      body: {
        code: 'UE-003',
        message: 'User not found',
        shortMessage: 'useNotFound',
      },
    });
    return userErrors;
  }

  /**
   * Could not load the user from the database
   * @returns {IError}
   */
  public static userNotLoadedCorrectly(): IError {
    const userErrors = new UsersErrors({
      code: 400,
      body: {
        code: 'UE-004',
        message: 'User entity not loaded as espected',
        shortMessage: 'userNotLoadedCorrectly',
      },
    });
    return userErrors;
  }

  /**
   * User email could not be sent
   * @returns {IError}
   */
  public static userEmailNotSent(): IError {
    const userErrors = new UsersErrors({
      code: 500,
      body: {
        code: 'UE-005',
        message: 'The email could not be sent',
        shortMessage: 'userEmailNotSent',
      },
    });
    return userErrors;
  }

  /**
   * User could not be updated
   * @returns {IError}
   */
  public static userFailedToUpdate(): IError {
    const userErrors = new UsersErrors({
      code: 500,
      body: {
        code: 'UE-006',
        message: 'Your user could not be updated',
        shortMessage: 'userFailedToUpdate',
      },
    });
    return userErrors;
  }

  /**
   * Password and password confirmation do not match
   * @returns {IError}
   */
  public static userPasswordConfirmationDoesNotMatch(): IError {
    const userErrors = new UsersErrors({
      code: 401,
      body: {
        code: 'UE-007',
        message: 'The password confirmation does not match',
        shortMessage: 'userPasswordConfirmationDoesNotMatch',
      },
    });
    return userErrors;
  }
}
