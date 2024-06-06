import { Controller, Get, Inject, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('WXPAY_SERVICE')
    private readonly wxClient: ClientProxy,
  ) {}

  @Get('hello')
  getHello(@Query('name') name: string): Promise<string> {
    return lastValueFrom(this.wxClient.send<string>({ cmd: 'getHello' }, name));
  }
}
