import { JobService } from './../service/jobService';
import { Component, OnInit } from '@angular/core';
import { HistoryRun } from './history';
import { formatDistanceStrict, format } from 'date-fns';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-history-run',
  templateUrl: './history-run.component.html',
  styleUrls: ['./history-run.component.css'],
})
export class HistoryRunComponent implements OnInit {
  dirRootProject = environment.dirRootProject;
  jobRuns: HistoryRun[] = [];
  loading: boolean = false;
  showDetailJob: boolean = false;
  detailId: String = '';
  runJobForm!: FormGroup;

  constructor(private jobService: JobService) {}
  ngOnInit(): void {
    this.loading = true;
    this.jobService.getAllHistory().then((data) => {
      this.jobRuns = data;
      this.loading = false;
    });
    this.runJobForm = new FormGroup({
      jobName: new FormControl('', Validators.required),
    });
  }

  handleReload() {
    this.loading = true;
    this.jobService.getAllHistory().then((data) => {
      this.jobRuns = data;
      this.loading = false;
    });
  }

  distanceDate(start: Date, end: Date) {
    return formatDistanceStrict(new Date(end), new Date(start));
  }

  formatDate(startTime: Date) {
    return format(new Date(startTime), 'dd/MM/yyyy HH:mm');
  }

  handleTriggerJob(data: any) {
    this.loading = true;
    this.jobService.runJob(data.jobName).subscribe(
      () => {
        this.runJobForm.reset();
        this.jobService.getAllHistory().then((data) => {
          this.jobRuns = data;
        });
      },
      (e) => {
        console.log(e);
        alert('Has a problem when trigger job');
      },
      () => {
        this.loading = false;
      }
    );
  }
}
