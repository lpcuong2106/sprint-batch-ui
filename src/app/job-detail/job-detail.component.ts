import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

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

  @Output('close') close: EventEmitter<any> = new EventEmitter();

  // showDialog() {
  //   this.display = true;
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log('chang')
    // if(changes['detailId'].currentValue != ""){
    //   this.isShowDialog = true;
    // }

    // changes.prop contains the old and the new value...
  }

  handleHide(){
    this.isShowDialog = false;
    this.close.emit(false)
  }
}
