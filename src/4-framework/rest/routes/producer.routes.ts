import { ProducerMessageController } from '@/3-presentation/controllers/producer/producer-message.controller';
import { InputSendMessageProducerSerializer } from '@/3-presentation/serializers/producer/send-message-producer.serializer';
import { restRouteAdapter } from '@/4-framework/adapters';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('producer')
export class ProducerRoutes {
  /**
   * Aqui tem parâmetros que serão injetados
   * @param producerMessageController
   */
  constructor(
    private readonly producerMessageController: ProducerMessageController,
  ) {}

  /**
   *
   * @param body
   * @returns
   */
  @Post()
  public async sendMessage(
    @Body() body: InputSendMessageProducerSerializer,
    @Res() res: Response,
  ) {
    return restRouteAdapter(this.producerMessageController)(body, res);
  }
}
