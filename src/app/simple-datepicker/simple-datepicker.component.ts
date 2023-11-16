import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-simple-datepicker',
  templateUrl: './simple-datepicker.component.html',
  styleUrls: ['./simple-datepicker.component.css']
})
export class SimpleDatepickerComponent implements OnInit {
  @Output() dateModelChange = new EventEmitter<moment.Moment | null>();

  dateModel: moment.Moment = null;
  options: any = { format: 'YYYY/MM/DD HH:mm', showClear: true };

  constructor() { }

  ngOnInit() {
    this.dateModel = moment('2015-11-20T22:10Z');
  }
  getTime() {
    window.alert('Selected time is:' + this.dateModel.format('YYYY/MM/DD HH:mm'));
  }
  addTime(val, selector) {
    this.dateModel = moment(this.dateModel.add(val, selector));
  }
  clearTime() {
    this.dateModel = null;
    this.dateModelChange.emit(this.dateModel);
  }

}
