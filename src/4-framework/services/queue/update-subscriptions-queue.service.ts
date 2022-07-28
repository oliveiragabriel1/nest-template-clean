import { IQueueService } from '@/2-business/services';
import Queue from '@/shared/enums/queue.enums';
import { ClientProxy } from '@nestjs/microservices';

interface IUpdateSubscriptionsQueueMessage {
  userId: string;
}

export class UpdateSubscriptionsQueueService
  implements IQueueService<IUpdateSubscriptionsQueueMessage>
{
  /**
   * Construtor da classe.
   */
  constructor(private clientProxy: ClientProxy) {
    // TODO: implementar o rabbitMQ factory que retorna um cliente e injeta
  }

  /**
   * Método que envia uma mensagem para a fila de `UpdateSubscriptions`.
   * @param {IUpdateSubscriptionsQueueMessage} message - payload que vai ser
   * publicado na fila
   */
  public sendMessage(message: IUpdateSubscriptionsQueueMessage): void {
    this.clientProxy.emit(Queue.UPDATE_SUBSCRIPTIONS, message);
  }

  /**
   * Método que envia uma lista de mensagens para a fila de `UpdateSubscriptions`.
   * @param {IUpdateSubscriptionsQueueMessage} messages - payload que vai ser publicado na fila
   */
  public sendBatchMessages(messages: IUpdateSubscriptionsQueueMessage[]): void {
    this.clientProxy.emit(Queue.UPDATE_SUBSCRIPTIONS, messages);
  }
}
