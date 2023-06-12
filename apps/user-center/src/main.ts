import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { UserCenterModule } from './user-center.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    UserCenterModule,
    new FastifyAdapter(),
  );

  await app.listen(3010);
}
bootstrap();
