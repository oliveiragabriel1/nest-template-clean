import { FindOneUserUseCase } from '@/2-business/usecases';
import { UserRepository } from '@/4-framework/repositories';

export const findOneUserUseCase = {
  provide: FindOneUserUseCase,
  useFactory: (userRepository: UserRepository) => {
    return new FindOneUserUseCase(userRepository);
  },
  inject: [UserRepository],
};
