export interface ICryptoService {
  /**
   * Encriptografa um texto
   * @param message
   */
  encrypt(message: string): Promise<string>;
  /**
   * Decriptografa um texto
   * @param message
   */
  decrypt(message: string): Promise<string>;
}
