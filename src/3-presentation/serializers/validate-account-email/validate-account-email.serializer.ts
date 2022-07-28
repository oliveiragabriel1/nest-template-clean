import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { IInputValidateAccountEmailDto } from '@/2-business/types/dtos/validate-account/email-validate-account';

export class InputValidateAccountEmailSerializer
  implements IInputValidateAccountEmailDto
{
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  public toEmail: string;
}
