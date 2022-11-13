import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContentModule } from './content/content.module';
import { CodeValidationModule } from './code-validation/code-validation.module';

@Module({
  imports: [
    ContentModule,
    CodeValidationModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
