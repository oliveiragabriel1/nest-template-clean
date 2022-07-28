import { UsersErrors } from '@/2-business/errors';
import { IOutputCreateUserDto, IInputCreateUserDto } from '@/2-business/types';
import { FindOneUserUseCase } from '@/2-business/usecases';
import { CreateUserUseCase } from '@/2-business/usecases';
import { left, right } from '@/shared/either';
import { AbstractController } from '../abstract.controller';

export class CreateUserController extends AbstractController<
  IInputCreateUserDto,
  IOutputCreateUserDto
> {
  /**
   * Constructor for CreateUserController
   * @param createUserUseCase
   * @param findOneUserUseCase
   */
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findOneUserUseCase: FindOneUserUseCase,
  ) {
    super();
  }

  /**
   * This method is responsible for executing CreateUserUseCase
   * @param input
   * @returns {IOutputCreateUserDto}
   */
  public async run(input: IInputCreateUserDto): Promise<IOutputCreateUserDto> {
    const isUserAlreadyRegistered = await this.findOneUserUseCase.exec({
      keys: ['email'],
      values: [input.email],
    });

    if (isUserAlreadyRegistered.isRight()) {
      return left(UsersErrors.userEmailAlreadyInUse());
    }

    if (input.password !== input.passwordConfirmation) {
      return left(UsersErrors.userPasswordConfirmationDoesNotMatch());
    }

    const userResult = await this.createUserUseCase.exec({
      ...input,
    });

    if (userResult.isLeft()) {
      return left(userResult.value);
    }

    return right(userResult.value);
  }
}
