import { ProcesesValidAccountController } from '@/3-presentation/controllers/process-valid-account/process-valid-account.controller';
import { InputProcessValidAccountSerializer } from '@/3-presentation/serializers/process-valid-account/process-valid-account';
import { rabbitmqRouteAdapter } from '@/4-framework/adapters/rabbitmq-route.adapter';
import Queue from '@/shared/enums/queue.enums';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class ProcessValidationAccountRoutes {
  /**
   * Constutor de UserRoutes
   * @param createUserController
   */
  constructor(
    private readonly procesesValidAccountController: ProcesesValidAccountController,
  ) {}

  /**
   * @param body
   */
  @EventPattern(Queue.VALIDATE_EMAIL_QUEUE)
  public async store(
    @Payload() body: InputProcessValidAccountSerializer,
    @Ctx() context: RmqContext,
  ) {
    return rabbitmqRouteAdapter(this.procesesValidAccountController)(
      body,
      context,
    );
  }
}
