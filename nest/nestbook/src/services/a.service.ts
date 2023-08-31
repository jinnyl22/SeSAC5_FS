// import { Injectable } from '@nestjs/common';

// @Injectable()
// 이 클래스는 프로바이더!
// @Injectable()을 지워도 가능한 건 주입을 받는 것이 없기때문!
export class ServiceA {
  getHello(): string {
    return 'Hello World A!';
  }
}
