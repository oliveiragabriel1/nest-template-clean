export interface IQueueService<I, O = void> {
  /**
   * Aqui será implementado para enviar uma mensagem em uma fila, poder ser em Redis ou RabbitMQ
   * por exemplo
   */
  sendMessage: (message: I) => O;
  /**
   * Aqui será implementado para enviar mensagens em uma fila, poder ser em Redis ou RabbitMQ
   * por exemplo
   */
  sendBatchMessages?: (messages: I[]) => O;
}
