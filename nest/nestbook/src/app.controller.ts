import { Controller, Get, Post, Redirect, Req, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ServiceB } from './services/b.service';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Controller()
export class AppController {
  greet: string;
  tmpQuery: { nickname: string };
  constructor(
    private readonly appService: AppService,
    private readonly serviceB: ServiceB,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return process.env.DATABASE_HOST;
  }

  @Get('/db-host-from-config')
  getDatabaseHostFromConfigService(): string {
    return this.configService.get('DATABASE_HOST');
  }

  @Get('/sayHello')
  sayHello(@Query('nickname') nickname: string): string {
    // return this.appService.sayHello(nickname);
    return this.appService.sayHello(nickname || this.tmpQuery.nickname);
  }
  @Get('/sayHelloR')
  sayHelloR(@Req() req: Request): string {
    return this.appService.sayHello(JSON.stringify(req.query));
  }

  // @Redirect('/sayHello')
  @Redirect()
  @Get('redirect-hello')
  redirectHello(@Req() req: Request) {
    // const { nickname } = req.query;
    // this.tmpQuery = { nickname: nickname as string };
    console.log('redirectHello >>>', req.query);
    console.log(Object.entries(req.query));

    return {
      // url: '/sayHelloR?nickname=' + nickname,
      // url: '/sayHelloR?nickname=' + req.query,
      url:
        '/sayHelloR?' +
        Object.entries(req.query)
          .map(([k, v]) => `${k}=${v}`)
          .join('&'),
    };
  }

  @Get('/serviceB')
  getHelloC(): string {
    return this.serviceB.getHello();
  }

  @Post()
  setHello() {
    this.greet = 'xxx';
    return `Hello ${this.greet}`;
  }
}
