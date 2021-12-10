import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-history',
  templateUrl: './sabrinaHistory.component.html',
  styleUrls: ['./sabrinaHistory.component.css']
})
export class SabrinaHistoryComponent implements OnInit {
  constructor(public logger: LoggerService) {
    this.logger.add('SabrinaHistoryComponent constructed');
  }

  ngOnInit() {
    this.logger.add('SabrinaHistoryComponent init');
  }
}