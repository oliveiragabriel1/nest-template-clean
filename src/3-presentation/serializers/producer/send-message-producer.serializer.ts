import { IInputSendMessageProducerDto } from '@/2-business/types/dtos/producer/send-message-producer.dto';
import { IsString } from 'class-validator';

export class InputSendMessageProducerSerializer
  implements IInputSendMessageProducerDto
{
  @IsString()
  public message: string;
}
