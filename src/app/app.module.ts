import { DialogModule } from 'primeng/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JobService } from './service/jobService';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { HistoryRunComponent } from './history-run/history-run.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  declarations: [AppComponent, HistoryRunComponent, JobDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    HttpClientModule,
  ],
  providers: [JobService],
  bootstrap: [AppComponent],
})
export class AppModule {}
