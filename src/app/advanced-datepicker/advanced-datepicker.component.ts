import { Component, OnInit, ViewChild } from '@angular/core';
import { DateTimePickerDirective } from 'projects/ng2-eonasdan-datetimepicker-v16/src/public-api';

@Component({
  selector: 'app-advanced-datepicker',
  templateUrl: './advanced-datepicker.component.html',
  styleUrls: ['./advanced-datepicker.component.css']
})
export class AdvancedDatepickerComponent implements OnInit {
  dateModel = null;
  options = {};
  @ViewChild(DateTimePickerDirective, { static: false }) dp: DateTimePickerDirective;

  constructor() { }
  ngOnInit() {
  }

  open() {
    if (this.dp && this.dp.datepicker) {
      this.dp.datepicker.show();
    } else {
      console.error('Datepicker is not initialized.');
    }
  }

}
