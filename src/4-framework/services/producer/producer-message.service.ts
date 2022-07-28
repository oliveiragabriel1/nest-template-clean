import { IProducerMessageService } from '@/2-business/services/producer/producer-message.service';
import {
  InputServiceProducer,
  OutputServiceProducer,
} from '@/2-business/types';
import { IGrpcExampleService } from '@/4-framework/grpc/definitions/example';
import { IError } from '@/shared/error';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { join } from 'path';
import { lastValueFrom } from 'rxjs';

export class ProducerMessageExampleService
  implements
    IProducerMessageService<InputServiceProducer, OutputServiceProducer>
{
  private client: ClientGrpcProxy;

  /**
   * Construtor da classe ProducerMessageExampleService
   */
  constructor() {
    const url = process.env.MICROSERVICE_EXAMPLE_URL;
    const port = process.env.MICROSERVICE_EXAMPLE_PORT;
    this.client = new ClientGrpcProxy({
      package: 'example',
      url: url + ':' + port,
      protoPath: join(__dirname, '../../grpc/__proto/example.proto'),
    });
  }
  /**
   * Método para enviar a mensagen
   * @param {InputServiceProducer} message
   */
  public async sendMessage(
    message: InputServiceProducer,
  ): Promise<OutputServiceProducer | IError> {
    const result = await lastValueFrom(
      this.client
        .getService<IGrpcExampleService>('ExampleService')
        .sendMessage({
          message,
        }),
    );
    return result;
  }
}
