import { AbstractController } from '../abstract.controller';
import { AuthenticationErrors, UsersErrors } from '@/2-business/errors';
import { left, right } from '@/shared/either';
import { FindOneUserUseCase } from '@/2-business/usecases';
import { CreateTokenUseCase } from '@/2-business/usecases/authenticator/create-token.usecase';
import {
  IInputLoginDto,
  IOutputLoginDto,
} from '@/2-business/types/dtos/authentication/login-token.dto';
import { IGoogleLoginService } from '@/2-business/services/authenticator/google-login.service';
import { IError } from '@/shared/error';

export interface ITokenPayload {
  userId: number;
  userSecureId: string;
  [index: string]: string | number;
}

export class LoginController extends AbstractController<
  IInputLoginDto,
  IOutputLoginDto
> {
  /**
   * Construtor de LoginController
   */
  constructor(
    private readonly findUserByUseCase: FindOneUserUseCase,
    private readonly createTokenUseCase: CreateTokenUseCase,
    private readonly googleLoginService: IGoogleLoginService,
  ) {
    super();
  }
  /**
   * Aqui realiza operação de login
   * @param {IInputLoginDto} input
   * @returns
   */
  public async run(input: IInputLoginDto): Promise<IOutputLoginDto> {
    const valid = await this.googleLoginService.login(input.code);
    if (valid instanceof IError) {
      return left(valid);
    } else if (!valid.valid) {
      return left(AuthenticationErrors.notValidAccountGoogle());
    }
    const userResult = await this.findUserByUseCase.exec({
      keys: ['email'],
      values: [valid.email],
    });

    if (userResult.isLeft()) {
      return left(UsersErrors.userNotFound());
    }

    const tokenResult = await this.createTokenUseCase.exec({
      id: userResult.value.id as string,
      email: userResult.value.email,
    });

    if (tokenResult.isLeft()) {
      return left(tokenResult.value);
    }

    return right(tokenResult.value);
  }
}
