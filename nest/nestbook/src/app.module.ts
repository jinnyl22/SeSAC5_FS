import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceA, ServiceB } from './services';
// import { BaseService } from './services/base-service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ServiceA, ServiceB],
})
export class AppModule {}
