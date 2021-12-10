import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-home',
  templateUrl: './sabrinaHome.component.html',
  styleUrls: ['./sabrinaHome.component.css']
})
export class SabrinaHomeComponent implements OnInit {
  constructor(public logger: LoggerService) {
    this.logger.add('SabrinaHomeComponent constructed');
  }

  ngOnInit() {
    this.logger.add('SabrinaHomeComponent init');
  }
}