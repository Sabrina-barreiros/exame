import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoggerService } from './logger.service';
import {RouterModule} from '@angular/router';
import { SabrinaTimerService } from './Sabrinatimer.service';
import { SabrinaHomeComponent } from './home/sabrinaHome.component';
import { SabrinaHistoryComponent } from './history/sabrinaHistory.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
    { path: 'home', component: SabrinaHomeComponent },
    { path: 'history', component: SabrinaHistoryComponent }
  ]) ],
  declarations: [ AppComponent, HelloComponent, SabrinaHomeComponent, SabrinaHistoryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SabrinaTimerService, LoggerService]
})
export class AppModule { }
