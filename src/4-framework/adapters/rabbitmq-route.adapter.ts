import { AbstractController } from '@/3-presentation/controllers';
import { Either } from '@/shared/either';
import { IError } from '@/shared/error';
import { RmqContext } from '@nestjs/microservices';

/**
 * This function is used to create a new controller and then
 * handle the response accordingly to the status code
 * @param {AbstractController} controller - controller to be used
 *
 */
export const rabbitmqRouteAdapter =
  <I, O>(controller: AbstractController<I, Either<IError, O>>) =>
  async (body: I, context: RmqContext) => {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();
    const opResult = await controller.run(body);
    if (opResult.isRight()) {
      return await channel.ack(originalMsg);
    }
    await channel.nack(originalMsg);
  };
