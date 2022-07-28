import { Response } from 'express';
import { IError } from '../error';

type HttpResponse = Response<any, Record<string, any>>;

class Http {
  /**
   * This function handles the response of the request in case of success
   * @param statusCode - HTTP success status code
   * @param response - Express response object
   * @param body - Response body  (optional)
   * @returns {HttpResponse}
   */
  public static handleSuccess(
    statusCode: number,
    response: Response,
    body?: any,
  ): HttpResponse {
    return response.status(statusCode).json(body);
  }

  /**
   * This function handles the response of the request in case of error
   * @param error - Error object caught by an app main function
   * @param response - Express response object
   * @returns {HttpResponse}
   */
  public static handleServerError(
    error: any,
    response: Response,
  ): HttpResponse {
    if (error instanceof IError) {
      return response.status(error.code).json(error.body);
    }

    return response.status(500).json({
      message: error.message
        ? `Internal server error - ${error.message}`
        : 'Internal server error',
    });
  }
}

export { Http, HttpResponse };
