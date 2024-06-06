import { Injectable } from '@nestjs/common';

@Injectable()
export class WxpayServiceService {
  getHello(name: string): string {
    return `Hello ${name}!`;
  }
}
