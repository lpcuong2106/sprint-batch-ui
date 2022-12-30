import { HistoryRun } from './../history-run/history';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';

@Injectable()
export class JobService {
  constructor(private http: HttpClient) {}

  getAllHistory() {
    return this.http
      .get(environment.appUrl + '/api/jobInfo')
      .toPromise()
      .then((res) => <HistoryRun[]>res);
  }

  runJob(jobName: String) {
    return this.http.post(
      environment.appUrl + '/api/startJob?jobName=' + jobName,
      {}
    );
  }
}
