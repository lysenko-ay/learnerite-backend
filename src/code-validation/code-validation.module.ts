import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CodeValidationGateway } from './code-validation.gateway';
import { CodeValidationController } from './code-validation.controller';
import { CodeValidationService } from './code-validation.service';
import { QueueService } from 'src/queue/queue.service';

@Module({
  imports: [HttpModule],
  controllers: [CodeValidationController],
  providers: [CodeValidationService, CodeValidationGateway, QueueService],
})
export class CodeValidationModule {}
