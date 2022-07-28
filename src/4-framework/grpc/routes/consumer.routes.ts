import { ConsumerMessageController } from '@/3-presentation/controllers/consumer/consumer-message.controller';
import { InputReceiveMessageConsumerSerializer } from '@/3-presentation/serializers/consumer/receiver-message-consumer.serializer';
import { grpcRouteAdapter } from '@/4-framework/adapters';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class ConsumerRoutes {
  /**
   * Construtor de ConsumerRoutes
   * @param {ConsumerMessageController} consumerMessageController
   *
   */
  constructor(
    private readonly consumerMessageController: ConsumerMessageController,
  ) {}

  /**
   * GRPC method to receiverMessage
   * @param {InputReceiveMessageConsumerSerializer} body
   * @returns {Promise<{ message: string }>}
   */
  @GrpcMethod('ExampleService', 'sendMessage')
  public async receiverMessage(
    body: InputReceiveMessageConsumerSerializer,
  ): Promise<{ message: string }> {
    return grpcRouteAdapter(this.consumerMessageController)(body);
  }
}
