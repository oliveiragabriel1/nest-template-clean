import { IOutputProtectDto } from '@/2-business/types/dtos/protect/protect.dto';
import { VerifyTokenUseCase } from '@/2-business/usecases/authenticator/verify-token.usecase';
import { left, right } from '@/shared/either';
import { AbstractController } from '../abstract.controller';

export class ProtectController extends AbstractController<
  unknown,
  IOutputProtectDto
> {
  /**
   * Constructor for ProtectController
   * @param createUserUseCase
   * @param findOneUserUseCase
   */
  constructor(private readonly verifyUseCase: VerifyTokenUseCase) {
    super();
  }

  /**
   * This method is responsible for executing CreateUserUseCase
   * @param input
   * @returns {IOutputCreateUserDto}
   */
  public async run(input: unknown, token: string): Promise<IOutputProtectDto> {
    const validToken = await this.verifyUseCase.exec({ token });
    if (validToken.isLeft()) {
      return left(validToken.value);
    }
    return right({ message: 'Success' });
  }
}
