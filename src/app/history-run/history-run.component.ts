import { JobService } from './../service/jobService';
import { Component, OnInit } from '@angular/core';
import { HistoryRun } from './history';

@Component({
  selector: 'app-history-run',
  templateUrl: './history-run.component.html',
  styleUrls: ['./history-run.component.css'],
})
export class HistoryRunComponent implements OnInit {
  jobRuns: HistoryRun[] = [];
  loading: boolean = false;

  constructor(private jobService: JobService) {}
  ngOnInit(): void {
    this.loading = true;
    this.jobRuns = [{ id: '1' }, { id: '2' }];
    this.jobService.getAllHistory().then((data) => {
      this.jobRuns = data;
      this.loading = false;
    });
  }

  // onI() {
  //   this.cars = [
  //     {id:"1"},
  //     {id:"2"},
  //   ]
  // }
}
