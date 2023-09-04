import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceA, ServiceB } from './services';
// import { BaseService } from './services/base-service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, ServiceA, ServiceB],
})
export class AppModule {}
