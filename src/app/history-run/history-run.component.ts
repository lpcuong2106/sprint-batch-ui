import { JobService } from './../service/jobService';
import { Component, OnInit } from '@angular/core';
import { HistoryRun } from './history';
import { formatDistance, format } from 'date-fns';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-history-run',
  templateUrl: './history-run.component.html',
  styleUrls: ['./history-run.component.css'],
})
export class HistoryRunComponent implements OnInit {
  jobRuns: HistoryRun[] = [];
  loading: boolean = false;
  showDetailJob: boolean = false;
  detailId: String = '';

  constructor(private jobService: JobService) {}
  ngOnInit(): void {
    this.loading = true;
    this.jobService.getAllHistory().then((data) => {
      this.jobRuns = data;
      this.loading = false;
    });
  }

  // downloadFile(dataURI: string){
  //     const byteString = window.atob(dataURI);
  //     const arrayBuffer = new ArrayBuffer(byteString.length);
  //     const int8Array = new Uint8Array(arrayBuffer);
  //     for (let i = 0; i < byteString.length; i++) {
  //       int8Array[i] = byteString.charCodeAt(i);
  //     }
  //     const blob = new Blob([int8Array], { type: 'image/png' });
  //     return blob;

  // }

  downloadFile(dataUrl: string) {
    // Split into two parts
    const parts = dataUrl.split(';base64,');

    // Hold the content type
    const imageType = parts[0].split(':')[1];

    // Decode Base64 string
    const decodedData = window.atob(parts[1]);

    // Create UNIT8ARRAY of size same as row data length
    const uInt8Array = new Uint8Array(decodedData.length);

    // Insert all character code into uInt8Array
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }

    const blob = new Blob([uInt8Array], { type: imageType });
    return saveAs(blob);
  }

  distanceDate(start: Date, end: Date) {
    return formatDistance(new Date(end), new Date(start), { addSuffix: true });
  }

  formatDate(startTime: Date) {
    return format(new Date(startTime), 'MM/dd/yyyy');
  }
}
