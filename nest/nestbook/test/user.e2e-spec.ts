import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    // createTestingModule로 생성한 moduleFixture로 만든 app으로 테스트를 하는 것이다! main.ts로 만든 app이 아님!!
    const moduleFixture: TestingModule = await Test.createTestingModule({
      // AppModule이 다 import 하고 있어서 UserModule을 import 하지 않아도된다!
      // main.ts는 테스트 하지 않음!
      imports: [AppModule],
    }).compile();

    // 여기서 NestApplication을 구동함!
    // 그러나 main.ts에서 만든 애플리케이션이 아님!
    app = moduleFixture.createNestApplication();
    // main.ts에 있는 listen과 비슷한 역할이나 가볍게 함수만 딱 실행해줌(데몬이 떠있는게 아님)
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
