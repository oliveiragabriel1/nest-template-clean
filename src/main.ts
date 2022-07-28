import { ValidationPipe } from '@nestjs/common';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';

/**
 * NestJS application entry point.
 * @returns {Promise<void>}
 */
async function bootstrap(): Promise<void> {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:3333',
      protoPath: join(__dirname, '4-framework/grpc/__proto/user.proto'),
      package: 'users',
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}

bootstrap();
