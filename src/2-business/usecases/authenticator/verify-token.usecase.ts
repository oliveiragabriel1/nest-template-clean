import { AuthenticationErrors } from '@/2-business/errors';
import { IAuthenticatorService } from '@/2-business/services/authenticator/authenticator.service';
import {
  IInputVerifyAuthenticateDTO,
  IOutputVerifyAuthenticateDTO,
} from '@/2-business/types/dtos/authentication/verify.dto';
import { left, right } from '@/shared/either';
import { IError } from '@/shared/error';
import { IAbstractUseCase } from '../abstract.usecase';

export class VerifyTokenUseCase
  implements
    IAbstractUseCase<IInputVerifyAuthenticateDTO, IOutputVerifyAuthenticateDTO>
{
  /**
   *
   * @param authenticatorService
   */
  constructor(private readonly authenticatorService: IAuthenticatorService) {}
  /**
   *
   * @param input
   * @returns
   */
  public async exec(
    input: IInputVerifyAuthenticateDTO,
  ): Promise<IOutputVerifyAuthenticateDTO> {
    try {
      const result = await this.authenticatorService.verify(input.token);
      if (result instanceof IError) {
        return left(AuthenticationErrors.invalidToken());
      }
      return right(result);
    } catch (error) {
      return left(AuthenticationErrors.erroInValidToken());
    }
  }
}
