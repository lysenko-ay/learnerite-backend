import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mkdirSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3030);
}
mkdirSync('./jobs', { recursive: true });
bootstrap();
