import { Injectable } from '@nestjs/common';

const maxRunningJobs = 1;
let runningJobs = 0;
const queue = [];

@Injectable()
export class QueueService {
  lastJobId = 1; // start from one to avoid (x + 1) in all callbacks
  jobId = 0;

  enqueue() {
    this.jobId += 1;
    return new Promise((resolve) => {
      queue.push(resolve);
      this.tryExecute();
    });
  }

  tryExecute() {
    if (runningJobs >= maxRunningJobs || queue.length === 0) {
      return;
    }

    runningJobs += 1;
    const resolve = queue.shift();
    resolve(this.next.bind(this));
  }

  length() {
    return queue.length;
  }

  next() {
    this.lastJobId += 1;
    runningJobs -= 1;
    this.tryExecute();
  }
}
