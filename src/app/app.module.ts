import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxDropzoneAltModule } from 'projects/ngx-dropzone-alt/src/public-api';
import { Ng2EonasdanDatetimepickerV16Module } from 'projects/ng2-eonasdan-datetimepicker-v16/src/public-api';
import { AdvancedDatepickerComponent } from './advanced-datepicker/advanced-datepicker.component';
import { LinkedDatepickersComponent } from './linked-datepickers/linked-datepickers.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SimpleDatepickerComponent } from './simple-datepicker/simple-datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkedDatepickersComponent,
    ReactiveFormComponent,
    SimpleDatepickerComponent,
    AdvancedDatepickerComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, NgxDropzoneAltModule, Ng2EonasdanDatetimepickerV16Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
