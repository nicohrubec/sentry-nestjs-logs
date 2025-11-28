import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import * as Sentry from '@sentry/nestjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppController.name);

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

  @Get('console-log')
  getConsoleLog(): string {
    console.log('Console log!');
    return 'Console log!';
  }

  @Get('nest-log')
  getNestLog(): string {
    this.logger.log('Nest log!');
    return 'Nest log!';
  }
}
