import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class SabrinaTimerService {
  private timer: any;
  private counter = 0;

  constructor(public logger: LoggerService) {
    this.logger.add('TimerService constructed');
  }

  start(ms: number) {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
      }, ms);
    }
  }
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.counter = 0;
    }
  }
  getCount() {
    return this.counter;
  }
}