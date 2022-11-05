import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { CodeValidationModule } from './code-validation/code-validation.module';

@Module({
  imports: [ContentModule, CodeValidationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
