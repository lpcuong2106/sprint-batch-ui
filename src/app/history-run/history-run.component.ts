import { Component,OnInit } from '@angular/core';
import { HistoryRun } from './history';

@Component({
  selector: 'app-history-run',
  templateUrl: './history-run.component.html',
  styleUrls: ['./history-run.component.css']
})
export class HistoryRunComponent implements OnInit {
  jobRuns: HistoryRun[] = [];

  ngOnInit(): void {
    this.jobRuns = [
      {id:"1"},
      {id:"2"},
    ]  }

  // onI() { 
  //   this.cars = [
  //     {id:"1"},
  //     {id:"2"},
  //   ]
  // }
}
