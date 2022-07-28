import { ValidateAccountEmailController } from '@/3-presentation/controllers/validate-account/validate-account-email.controller';
import { InputValidateAccountEmailSerializer } from '@/3-presentation/serializers/validate-account-email/validate-account-email.serializer';
import { restRouteAdapter } from '@/4-framework/adapters';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('validation')
export class ValidationRoutes {
  /**
   * Constutor de UserRoutes
   * @param createUserController
   */
  constructor(
    private readonly validateAccountEmailController: ValidateAccountEmailController,
  ) {}

  /**
   * @param body
   * @returns {RequestHandler}
   */
  @Post('email')
  public async store(
    @Body() body: InputValidateAccountEmailSerializer,
    @Res() res: Response,
  ) {
    return restRouteAdapter(this.validateAccountEmailController)(body, res);
  }
}
