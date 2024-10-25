import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-linked-datepickers',
  templateUrl: './linked-datepickers.component.html',
  styleUrls: ['./linked-datepickers.component.css']
})
export class LinkedDatepickersComponent implements OnInit {
  moment = require('moment');

  startDate = null;
  endDate = null;

  // Now startDate and endDate are Date objects
  startOptions: any = { format: 'YYYY/MM/DD HH:mm', showClear: true };
  endOptions: any = { format: 'YYYY/MM/DD HH:mm', showClear: true };
  // startOptions: any = { format: 'DD.MM.YYYY' };
  // endOptions: any = { format: 'DD.MM.YYYY' };
  constructor() { }

  ngOnInit() {
    this.endOptions.minDate = this.startDate;
    this.startOptions.maxDate = this.endDate;
  }
  update() {
    this.startOptions.maxDate = this.endDate;
    this.endOptions.minDate = this.startDate;
  }

}
