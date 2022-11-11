import { HttpService } from '@nestjs/axios';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { QueueService } from 'src/queue/queue.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  queueLimit = undefined;
  secret = undefined;

  constructor(
    private queueService: QueueService,
    private httpService: HttpService,
    private configService: ConfigService,
  ) {
    // this.queueLimit = this.configService.get('MAX_QUEUED_JOBS_WITHOUT_CAPTCHA');
    this.queueLimit = 0;
    this.secret = this.configService.get('RECAPTCHA_SECRET_KEY');
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    return new Promise(async (resolve) => {
      const socket = context.switchToWs().getClient();
      if (this.queueService.length() >= this.queueLimit) {
        const { token } = context.switchToWs().getData();
        if (token) {
          const url = `https://www.google.com/recaptcha/api/siteverify?secret=${this.secret}&response=${token}`;
          const response = await firstValueFrom(this.httpService.get(url));
          if (response.data.success === false) {
            socket.emit('error', 'Recaptcha check failed');
            socket.disconnect();
            resolve(false);
          }
        } else {
          socket.emit('recaptcha', '');
          resolve(false);
        }
      }

      resolve(true);
    });
  }
}
