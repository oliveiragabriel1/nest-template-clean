import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  /**
   * Constuctor for AppController
   * @param appService
   */
  constructor(private readonly appService: AppService) {}

  /**
   * @returns {string} String
   */
  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
}
