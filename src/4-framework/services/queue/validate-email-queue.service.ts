import { IQueueService } from '@/2-business/services/queue/queue.service';
import { ValidateQueueExample } from '@/2-business/types/service-type-definitions/validate-queue-example';
import Queue from '@/shared/enums/queue.enums';
import { IError } from '@/shared/error';
import { ClientProxy } from '@nestjs/microservices';

export class ValidateEmailQueueService
  implements IQueueService<ValidateQueueExample, void | IError>
{
  /**
   * Construtor da classe.
   */
  constructor(private clientProxy: ClientProxy) {
    // TODO: implementar o rabbitMQ factory que retorna um cliente e injeta
  }

  /**
   * Método que envia uma mensagem para a fila validate-email-queue
   * @param {ValidateQueueExample} message - payload que vai ser
   * publicado na fila
   */
  public sendMessage(message: ValidateQueueExample): void {
    this.clientProxy.emit(Queue.VALIDATE_EMAIL_QUEUE, message);
  }
}
