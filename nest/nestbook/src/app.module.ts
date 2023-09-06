import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceA, ServiceB } from './services';
// import { BaseService } from './services/base-service';
import { UsersModule } from './users/users.module';
import { EmailService } from './email/email.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, ServiceA, ServiceB, EmailService],
})
export class AppModule {}
