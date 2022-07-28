import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * @returns {string} String
   */
  public getHello(): string {
    return 'Hello World!';
  }
}
