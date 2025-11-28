import { Module } from '@nestjs/common';
import { SentryModule, SentryGlobalFilter } from '@sentry/nestjs/setup';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SentryModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: SentryGlobalFilter,
  }],
})
export class AppModule {}
