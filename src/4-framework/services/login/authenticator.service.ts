import { IAuthenticatorService } from '@/2-business/services/authenticator/authenticator.service';
import JWT from 'jsonwebtoken';

export class AuthenticatorService implements IAuthenticatorService {
  /**
   * Aqui injeta elementos no token
   * @param payload
   * @returns
   */
  public async sign(payload: {
    [k: string]: string | number | boolean;
  }): Promise<{ token: string }> {
    const token = JWT.sign(payload, process.env.SECRET_TOKEN as string, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return { token };
  }
  /**
   * Aqui vefica o token
   * @param token
   * @returns
   */
  public async verify(token: string): Promise<{ id: string; email: string }> {
    const tokenPayload: any = JWT.verify(
      token,
      process.env.SECRET_TOKEN as string,
    );
    return { ...tokenPayload, verify: true };
  }
}
