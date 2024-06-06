import { Controller, Get } from '@nestjs/common';
import { WxpayServiceService } from './wxpay-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class WxpayServiceController {
  constructor(private readonly wxpayServiceService: WxpayServiceService) {}

  @MessagePattern({ cmd: 'getHello' })
  getHello(name: string): string {
    return this.wxpayServiceService.getHello(name);
  }
}
