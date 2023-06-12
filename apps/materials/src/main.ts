import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { MaterialsModule } from './materials.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    MaterialsModule,
    new FastifyAdapter(),
  );
  await app.listen(3020);
}
bootstrap();