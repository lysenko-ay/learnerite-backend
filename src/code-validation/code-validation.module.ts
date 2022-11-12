import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CodeValidationGateway } from './code-validation.gateway';
import { QueueService } from 'src/queue/queue.service';

@Module({
  imports: [HttpModule],
  providers: [CodeValidationGateway, QueueService],
})
export class CodeValidationModule {}
