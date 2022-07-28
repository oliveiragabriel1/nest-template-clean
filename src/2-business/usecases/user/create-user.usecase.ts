import { IInputCreateUserDto, IOutputCreateUserDto } from '@/2-business/types';
import { left, right } from '@/shared/either';
import { IUserRepository } from '@/2-business/repositories';
import { IHasherService } from '@/2-business/services';
import { IAbstractUseCase } from '../abstract.usecase';
import { UserEntity } from '@/1-domain/entities';
import { UsersErrors } from '@/2-business/errors';

export class CreateUserUseCase
  implements IAbstractUseCase<IInputCreateUserDto, IOutputCreateUserDto>
{
  /**
   * CreateUserUseCase constructor with dependencies injection
   * @param userRepository - user repository
   * @param hasherService - hasher service
   */
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly hasherService: IHasherService,
  ) {}

  /**
   * This method creates a new user using a hasher service and a user repository
   * @param {IInputCreateUserDto} input - parameters to create a new user
   * @returns {Promise<IOutputCreateUserDto>}
   */
  public async exec(input: IInputCreateUserDto): Promise<IOutputCreateUserDto> {
    if (input.password !== input.passwordConfirmation) {
      return left(UsersErrors.userPasswordConfirmationDoesNotMatch());
    }

    const hashedPassword = await this.hasherService.create(input.password!);
    delete input.passwordConfirmation;
    delete input.password;

    const user = UserEntity.create({
      ...input,
      password: hashedPassword,
    });

    try {
      const userEntity = await this.userRepository.create(user);
      return right(userEntity);
    } catch (error) {
      return left(UsersErrors.entityCreationError());
    }
  }
}
