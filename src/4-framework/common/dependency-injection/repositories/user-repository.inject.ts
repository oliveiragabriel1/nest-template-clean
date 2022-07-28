import { UserRepository } from '@/4-framework/repositories';
import { DataSource } from 'typeorm';
import { UserModel } from '@/4-framework/typeorm/models/user.model';
import { getDataSourceToken } from '@nestjs/typeorm';

export const userRepositoryInject = {
  provide: UserRepository,
  useFactory: (dataSource: DataSource) => {
    return new UserRepository(dataSource.getRepository(UserModel));
  },
  inject: [getDataSourceToken()],
};
