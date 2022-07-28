import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './4-framework/nestjs';
import { AuthModule } from './4-framework/nestjs/modules/auth.module';
import { ProtectModule } from './4-framework/nestjs/modules/protect.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
    }),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT || '0'),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      autoLoadEntities: true,
      entities: [
        join(__dirname, '4-framework', 'typeorm', 'models', '*.{ts,js}'),
      ],
      synchronize: false,
    }),
    UserModule,
    AuthModule,
    ProtectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
