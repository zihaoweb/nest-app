import { Module } from '@nestjs/common';
import { WxpayServiceController } from './wxpay-service.controller';
import { WxpayServiceService } from './wxpay-service.service';

@Module({
  imports: [],
  controllers: [WxpayServiceController],
  providers: [WxpayServiceService],
})
export class WxpayServiceModule {}
