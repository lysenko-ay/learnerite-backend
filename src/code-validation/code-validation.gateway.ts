import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { RecaptchaGuard } from 'src/recaptcha/recaptcha.guard';

import { QueueService } from 'src/queue/queue.service';
import { test } from './engine/octave';
import { UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const engines = {
  octave: { test },
};

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class CodeValidationGateway {
  executionTimeout: number;

  constructor(
    private queueService: QueueService,
    private configService: ConfigService,
  ) {
    this.executionTimeout = parseInt(
      this.configService.get('EXECUTION_TIMEOUT'),
    );
  }

  @WebSocketServer()
  server;

  @UseGuards(RecaptchaGuard)
  @SubscribeMessage('register')
  handleMessage(
    @MessageBody('course') course: string,
    @MessageBody('type') type: string,
    @MessageBody('chapterId') chapterId: string,
    @MessageBody('taskId') taskId: string,
    @ConnectedSocket() client,
  ) {
    this.queueService.enqueue().then((next: any) => {
      if (!client.connected) {
        return next();
      }

      this.server.emit('last-job-id', this.queueService.lastJobId);
      client.timeout(1000).emit('request-code', async (err, code) => {
        if (err) {
          client.disconnect();
          return next();
        }

        try {
          const result = await engines[course].test(
            `${course}/${type}/tests/${chapterId}/${taskId}`,
            code,
            this.executionTimeout,
          );
          client.emit('result', result);
        } catch (err) {
          client.emit('error', err);
        }

        client.disconnect();
        next();
      });
    });

    return {
      jobId: this.queueService.jobId,
      lastJobId: this.queueService.lastJobId,
    };
  }
}
