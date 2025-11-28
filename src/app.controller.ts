import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as Sentry from '@sentry/nestjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    Sentry.logger.info('Hello World!');
    return this.appService.getHello();
  }

  @Get('error')
  getError(): string {
    Sentry.logger.error('Test error!');
    throw new Error('Test error');
  }
}
