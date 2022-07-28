import { CreateUserController } from '@/3-presentation/controllers';
import { CreateUserSerializer } from '@/3-presentation/serializers';
import { restRouteAdapter } from '@/4-framework/adapters';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('users')
export class UserRoutes {
  /**
   * Constutor de UserRoutes
   * @param createUserController
   */
  constructor(private readonly createUserController: CreateUserController) {}

  /**
   * @param body
   * @returns {RequestHandler}
   */
  @Post()
  public async store(@Body() body: CreateUserSerializer, @Res() res: Response) {
    return restRouteAdapter(this.createUserController)(body, res);
  }
}
