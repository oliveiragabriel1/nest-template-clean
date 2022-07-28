import { AbstractController } from '@/3-presentation/controllers';
import { Either } from '@/shared/either';
import { IError } from '@/shared/error';
import { RpcException } from '@nestjs/microservices';

/**
 * This function is used to create a new controller and then
 * handle the response accordingly to the status code
 * @param {AbstractController} controller - controller to be used
 * @returns a closure function that will be used to handle the request
 */
export const grpcRouteAdapter =
  <I, O>(controller: AbstractController<I, Either<IError, O>>) =>
  async (body: I) => {
    const opResult = await controller.run(body);

    if (opResult.isRight()) {
      return opResult.value;
    }
    throw new RpcException({
      code: opResult.value.code,
      body: opResult.value.body,
    });
  };
