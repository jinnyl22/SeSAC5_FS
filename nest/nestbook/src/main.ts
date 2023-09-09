import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// import * as dotenv from 'dotenv';
// import * as path from 'path';

// dotenv 패키지를 직접 사용하는 경우
// dotenv.config({
//   path: path.resolve(
//     (process.env.NODE_ENV === 'production') ? '.production.env'
//       : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env'
//   )
// });

async function bootstrap() {
  // 여기서 NestFactory가 NestApplication을 생성해준다
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  await app.listen(3000);
  // await app.listen(process.env.PORT || 3000);
}
bootstrap();
