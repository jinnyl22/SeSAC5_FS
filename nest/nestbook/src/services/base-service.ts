import { Inject } from '@nestjs/common';
import { ServiceA } from './a.service';

export class BaseService {
  @Inject(ServiceA)
  private readonly serviceA: ServiceA;

  // constructor(private readonly _serviceA: ServiceA) {}
  getHello(): string {
    return 'Hello World BASE!';
  }
  doSomeFuncFromA(): string {
    return this.serviceA.getHello();
  }
}
