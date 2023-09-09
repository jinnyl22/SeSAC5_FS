import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceA, ServiceB } from './services';
// import { BaseService } from './services/base-service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './config/validationSchema';
import emailConfig from './config/emailConfig';
import { CoreModule } from './common/core.module';

@Module({
  imports: [
    CoreModule,
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: [`${__dirname}/config/env/.${process.env.NODE_ENV}.env`],
      load: [emailConfig],
      isGlobal: true,
      validationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ServiceA, ServiceB],
})
export class AppModule {}
