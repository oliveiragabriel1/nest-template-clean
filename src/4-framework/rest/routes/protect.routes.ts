import { ProtectController } from '@/3-presentation/controllers/protect/protect.controller';
import { restRouteAdapter } from '@/4-framework/adapters';
import { Controller, Res, Get, Body, Req } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('protect')
export class ProtectRoutes {
  /**
   * Constutor de ProtectRoutes
   * @param loginController
   */
  constructor(private readonly loginController: ProtectController) {}

  /**
   * Aqui só serve para realizar um teste se está realmente protegendo
   * de acordo com o token que vai vir da requisição
   * @returns
   */
  @Get()
  public async example(@Res() res: Response, @Req() req: Request) {
    return restRouteAdapter(this.loginController)(
      undefined,
      res,
      {
        status: 200,
        login: false,
        protect: true,
      },
      req,
    );
  }
}
