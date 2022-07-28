import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

/**
 * Produz um producer message RabbitMQ
 */
const rabbitMQProducerFactory = (
  queue: string,
  durable = true,
  noAck = false,
  persistent = true,
): ClientProxy => {
  return ClientProxyFactory.create({
    transport: Transport.RMQ,
    options: {
      noAck,
      persistent,
      urls: [
        `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_URL}`,
      ],
      queue,
      queueOptions: {
        durable,
      },
    },
  });
};

export default rabbitMQProducerFactory;
