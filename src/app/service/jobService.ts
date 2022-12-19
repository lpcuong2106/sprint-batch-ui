import { HistoryRun } from './../history-run/history';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JobService {
  constructor(private http: HttpClient) {}

  // getCarsSmall() {
  //   return this.http
  //     .get('/showcase/resources/data/cars-small.json')
  //     .toPromise()
  //     .then((res) => <Car[]>res.data)
  //     .then((data) => {
  //       return data;
  //     });
  // }

  getAllHistory() {
    return this.http
      .get(
        'https://c4e4a39b-840c-4db2-a588-acb7fe5e0aa9.mock.pstmn.io/job-history'
      )
      .toPromise()
      .then((res) => <HistoryRun[]>res);
  }
}
