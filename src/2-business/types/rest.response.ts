interface IRestResponse<P = any> {
  payload?: P;
  statusCode: number;
}

export { IRestResponse };
