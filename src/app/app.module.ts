import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxDropzoneAltModule } from 'projects/ngx-dropzone-alt/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, NgxDropzoneAltModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
