import { CreateUserUseCase, FindOneUserUseCase } from '@/2-business/usecases';
import { CreateUserController } from '@/3-presentation/controllers';
import { SubscriptionServiceClientOptions } from '@/4-framework/grpc/grpc-client-options';
import { UserRepository } from '@/4-framework/repositories';
import { HasherService } from '@/4-framework/services';
import { UserModel } from '@/4-framework/typeorm/models/user.model';
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserRoutes } from '../../rest/routes/user.routes';

@Module({
  imports: [ClientsModule.register([SubscriptionServiceClientOptions])],
  controllers: [UserRoutes],
  providers: [
    {
      provide: UserRepository,
      useFactory: (dataSource: DataSource) => {
        return new UserRepository(dataSource.getRepository(UserModel));
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: HasherService,
      useFactory: () => {
        return new HasherService();
      },
    },
    {
      provide: CreateUserUseCase,
      useFactory: (
        userRepository: UserRepository,
        hasherService: HasherService,
      ) => {
        return new CreateUserUseCase(userRepository, hasherService);
      },
      inject: [UserRepository, HasherService],
    },
    {
      provide: FindOneUserUseCase,
      useFactory: (userRepository: UserRepository) => {
        return new FindOneUserUseCase(userRepository);
      },
      inject: [UserRepository],
    },
    {
      provide: CreateUserController,
      useFactory: (
        createUserUseCase: CreateUserUseCase,
        findOneUserUseCase: FindOneUserUseCase,
      ) => {
        return new CreateUserController(createUserUseCase, findOneUserUseCase);
      },
      inject: [CreateUserUseCase, FindOneUserUseCase],
    },
  ],
})
export class UserModule {}
