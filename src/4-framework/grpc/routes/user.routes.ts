import { ISubscriptionEntity, IUserEntity } from '@/1-domain/entities';
import { CreateUserController } from '@/3-presentation/controllers';
import { FindUserSubscriptionsController } from '@/3-presentation/controllers';
import { CreateUserSerializer } from '@/3-presentation/serializers';
import { FindUserSubscriptionsSerializer } from '@/3-presentation/serializers';
import { grpcRouteAdapter } from '@/4-framework/adapters';
import { Controller, Inject, OnModuleInit } from '@nestjs/common';
import { GrpcMethod, ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { IGrpcSubscriptionService, Subscription } from '../grpc-services';

@Controller()
export class UserRoutes implements OnModuleInit {
  private grpcSubscriptionService: IGrpcSubscriptionService;

  /**
   * Constructor for the UserRoutes class
   * @param {CreateUserController} createUserController
   * @param {FindUserSubscriptionsController} findUserSubscriptionsController
   * @param {ClientGrpc} subscriptionServiceClient
   */
  constructor(
    private readonly createUserController: CreateUserController,
    private readonly findUserSubscriptionsController: FindUserSubscriptionsController,
    @Inject('SUBSCRIPTION_SERVICE')
    private readonly subscriptionServiceClient: ClientGrpc,
  ) {}

  /**
   * This function is used to instantiate the grpc service
   */
  public onModuleInit() {
    this.grpcSubscriptionService =
      this.subscriptionServiceClient.getService<IGrpcSubscriptionService>(
        'SubscriptionService',
      );
  }

  /**
   * GRPC method to create a new user
   * @param {CreateUserSerializer} body
   * @returns {Promise<IUserEntity>}
   */
  @GrpcMethod('UserService', 'createUser')
  public async store(body: CreateUserSerializer): Promise<IUserEntity> {
    return grpcRouteAdapter(this.createUserController)(body);
  }

  /**
   * GRPC method to get all user subscriptions and join them with the
   * corresponding user
   * @param {GetUserSubscriptionSerializer} body - serializer with userId
   * @returns {Promise<IUserEntity>}
   */
  @GrpcMethod('UserService', 'getUserSubscriptions')
  public async findUserSubscriptions(
    body: FindUserSubscriptionsSerializer,
  ): Promise<IUserEntity> {
    const userSubscriptions: Subscription[] = await firstValueFrom(
      this.grpcSubscriptionService.findByUserId(body),
    );

    return grpcRouteAdapter(this.findUserSubscriptionsController)({
      query: {
        keys: ['id'],
        values: [body.userId],
      },
      subscriptions: userSubscriptions as unknown as ISubscriptionEntity[],
    });
  }
}
