import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateTimePickerDirective } from './datetimepicker.directive';



@NgModule({
  declarations: [
    DateTimePickerDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DateTimePickerDirective
  ]
})
export class Ng2EonasdanDatetimepickerV16Module { }
