import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
})
export class JobDetailComponent {
  loading: boolean = false;

  @Input("detailId")
  detailId: String = "";

  @Input("isShowDialog")
  isShowDialog: Boolean = false;

  // showDialog() {
  //   this.display = true;
  // }

  ngOnChanges(changes: SimpleChanges) {
    // if(changes['detailId'].currentValue != ""){
    //   this.isShowDialog = true;
    // }

    // changes.prop contains the old and the new value...
  }

  handleHide(){
    this.isShowDialog = true;
  }
}
