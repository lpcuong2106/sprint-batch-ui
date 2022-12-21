import { HistoryRun } from './../history-run/history';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JobService {
  SERVER: String = "https://93bc909e-0c6e-461f-8b54-bdc7df815f35.mock.pstmn.io";

  constructor(private http: HttpClient) {}  

  getAllHistory() {
    return this.http
      .get(
        this.SERVER + '/api/jobInfo'
      )
      .toPromise()
      .then((res) => <HistoryRun[]>res);
  }

  runJob(jobName: String){
    return this.http
    .post(
      this.SERVER + '/api/startJob?jobName='+jobName, {}
    )
  }
}
