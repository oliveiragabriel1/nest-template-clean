import { IInputReceiveMessageConsumerDto } from '@/2-business/types/dtos/consumer/receiver-message-consumer.dto';
import { IsString } from 'class-validator';

export class InputReceiveMessageConsumerSerializer
  implements IInputReceiveMessageConsumerDto
{
  @IsString()
  public message: string;
}
