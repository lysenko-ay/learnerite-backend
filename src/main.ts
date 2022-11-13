import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { mkdirSync } from 'fs';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  await app.listen(configService.get('APP_PORT') || 3030);
}
mkdirSync('./jobs', { recursive: true });
bootstrap();
