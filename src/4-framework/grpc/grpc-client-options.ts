import { join } from 'path';
import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const SubscriptionServiceClientOptions: ClientProviderOptions = {
  name: 'SUBSCRIPTION_SERVICE',
  transport: Transport.GRPC,
  options: {
    url: `${process.env.SUBSCRIPTION_SVC_URL}:${process.env.SUBSCRIPTION_SVC_PORT}`,
    package: 'subscriptions',
    protoPath: join(__dirname, '__proto/subscription.proto'),
    loader: {
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
