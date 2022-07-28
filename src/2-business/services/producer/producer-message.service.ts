import { IError } from '@/shared/error';

export interface IProducerMessageService<T, K> {
  /**
   * Aqui será implementado para produzir uma mensagem, seja por gRPC,RabbitMQ, entre outros
   * @param message
   */
  sendMessage(message: T): Promise<K | IError>;
}
