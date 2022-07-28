import { IInputCreateUserDto } from '@/2-business/types';
import { IUserStatusEntity } from '@/1-domain/entities';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserSerializer implements IInputCreateUserDto {
  @IsString()
  @IsNotEmpty()
  public username: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @IsNotEmpty()
  public birthday: string;

  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsNotEmpty()
  public passwordConfirmation: string;

  public userStatus: IUserStatusEntity;
}
