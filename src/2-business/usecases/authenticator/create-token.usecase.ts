import { AuthenticationErrors } from '@/2-business/errors/authentication.errors';
import { IAuthenticatorService } from '@/2-business/services/authenticator/authenticator.service';
import {
  IInputCreateTokenDto,
  IOutputAuthenticationDto,
} from '@/2-business/types/dtos/authentication/create-token.dto';

import { left, right } from '@/shared/either';
import { IAbstractUseCase } from '../abstract.usecase';

export class CreateTokenUseCase
  implements IAbstractUseCase<IInputCreateTokenDto, IOutputAuthenticationDto>
{
  /**
   * Construtor de CreateTokenUseCase
   * @param authenticatorService
   */
  constructor(private readonly authenticatorService: IAuthenticatorService) {}

  /**
   * Aqui gera um token criptografado
   * @param input
   * @returns {IOutputAuthenticationDto}
   */
  public async exec(
    input: IInputCreateTokenDto,
  ): Promise<IOutputAuthenticationDto> {
    try {
      const result = await this.authenticatorService.sign(input);

      return right({ token: result.token });
    } catch (error) {
      return left(AuthenticationErrors.tokenCreationError());
    }
  }
}
