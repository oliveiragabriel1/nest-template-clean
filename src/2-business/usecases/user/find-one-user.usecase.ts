import {
  IInputFindOneUserDto,
  IOutputFindOneUserDto,
} from '@/2-business/types';
import { left, right } from '@/shared/either';
import { IUserRepository } from '@/2-business/repositories';
import { IAbstractUseCase } from '../abstract.usecase';
import { UsersErrors } from '@/2-business/errors';

class FindOneUserUseCase
  implements IAbstractUseCase<IInputFindOneUserDto, IOutputFindOneUserDto>
{
  /**
   * FindOneUserUseCase constructor with dependencies injection
   * @param {IUserRepository} userRepository - user repository
   */
  constructor(private readonly userRepository: IUserRepository) {}

  /**
   * This method finds a user based on a unique key value
   * @param {IInputFindOneUserDto} input - parameters to search for a user
   * in the database
   * @returns {Promise<IOutputFindOneUserDto>}
   */
  public async exec(
    input: IInputFindOneUserDto,
  ): Promise<IOutputFindOneUserDto> {
    const user = await this.userRepository.findOneBy({
      columns: input.keys,
      values: input.values,
    });

    if (!user) {
      return left(UsersErrors.userNotFound());
    }

    return right(user);
  }
}

export { FindOneUserUseCase };
