import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { IInputProcessValidAccountEmailDto } from '@/2-business/types/dtos/validate-account/process-valid-account-email.dto';

export class InputProcessValidAccountSerializer
  implements IInputProcessValidAccountEmailDto
{
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public to: string;
  @IsString()
  @IsNotEmpty()
  public text: string;
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public from: string;
  @IsString()
  @IsNotEmpty()
  public subject: string;
}
