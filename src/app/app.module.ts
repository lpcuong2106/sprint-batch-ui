import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { HistoryRunComponent } from './history-run/history-run.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryRunComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
