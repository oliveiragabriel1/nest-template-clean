interface IErrorBody {
  code: string;
  message: unknown;
  shortMessage: string;
}

class IError {
  public code: number;
  public body: IErrorBody;

  /**
   * Constructor for IError
   * @param param0 - code and body
   */
  constructor({ code, body }: { code: number; body: IErrorBody }) {
    this.code = code;
    this.body = body;
  }
}

export { IError, IErrorBody };
