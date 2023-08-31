import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ServiceB } from './services/b.service';

@Controller()
export class AppController {
  greet: string;
  constructor(
    private readonly appService: AppService,
    private readonly serviceB: ServiceB,
  ) {}

  @Get('/serviceB')
  getHelloC(): string {
    return this.serviceB.getHello();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  setHello() {
    this.greet = 'xxx';
    return `Hello ${this.greet}`;
  }
}
