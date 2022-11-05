import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { QueueService } from 'src/queue/queue.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class CodeValidationGateway {
  constructor(private queueService: QueueService) {}

  @WebSocketServer()
  server;

  @SubscribeMessage('register')
  handleMessage(@MessageBody() data: string, @ConnectedSocket() client) {
    this.queueService.enqueue().then((next: any) => {
      if (!client.connected) {
        return next();
      }

      setTimeout(() => {
        this.server.emit('last-job-id', this.queueService.lastJobId);
        client.timeout(1000).emit('request-code', (err, code) => {
          if (err) {
            client.disconnect();
            return next();
          }

          client.disconnect();
          next();
        });
      }, 3000);
    });

    return {
      jobId: this.queueService.jobId,
      lastJobId: this.queueService.lastJobId,
    };
  }
}
