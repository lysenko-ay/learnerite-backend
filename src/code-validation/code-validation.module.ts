import { Module } from '@nestjs/common';
import { CodeValidationGateway } from './code-validation.gateway';
import { CodeValidationController } from './code-validation.controller';
import { CodeValidationService } from './code-validation.service';
import { QueueService } from 'src/queue/queue.service';

@Module({
  controllers: [CodeValidationController],
  providers: [CodeValidationService, CodeValidationGateway, QueueService],
})
export class CodeValidationModule {}
