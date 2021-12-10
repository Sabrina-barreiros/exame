import { Component, VERSION } from '@angular/core';
import { SabrinaTimerService } from './Sabrinatimer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(public timer: SabrinaTimerService) {
    this.timer.start(1000);
  }
}