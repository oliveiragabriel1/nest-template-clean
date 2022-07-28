import { ICryptoService } from '@/2-business/services/crypto/crypto.service';
import CryptoJS from 'crypto-js';

export class CryptoService implements ICryptoService {
  /**
   * Encripta um texto
   * @param message
   * @returns
   */
  public async encrypt(message: string): Promise<string> {
    return await Promise.resolve(
      CryptoJS.AES.encrypt(
        message,
        process.env.CIPHER_KEY as string,
      ).toString(),
    );
  }
  /**
   * Decriptografa um texto
   * @param message
   */
  public async decrypt(message: string): Promise<string> {
    return await Promise.resolve(
      CryptoJS.AES.decrypt(message, process.env.CIPHER_KEY as string).toString(
        CryptoJS.enc.Utf8,
      ),
    );
  }
}
