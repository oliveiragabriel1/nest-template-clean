import { LoginController } from '@/3-presentation/controllers/auth/login.controller';
import { restRouteAdapter } from '@/4-framework/adapters';
import { Query, Controller, Res, Get } from '@nestjs/common';
import { Response } from 'express';

@Controller('auth')
export class AuthRoutes {
  /**
   * Constutor de UserRoutes
   * @param createUserController
   */
  constructor(private readonly loginController: LoginController) {}

  /**
   *
   * @param query
   * @returns
   */
  @Get('google')
  public async login(@Query() query: any, @Res() res: Response) {
    return restRouteAdapter(this.loginController)(query, res, {
      status: 200,
      login: true,
      protect: false,
    });
  }
}
