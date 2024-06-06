import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { WxpayServiceService } from './wxpay-service.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WxpayServiceService,
    {
      transport: Transport.TCP,
      options: {
        port: 4000,
      },
    },
  );

  await app.listen();
}
bootstrap();
