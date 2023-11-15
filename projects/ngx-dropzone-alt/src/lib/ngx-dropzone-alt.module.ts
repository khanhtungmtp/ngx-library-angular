import { NgModule } from '@angular/core';
import { NgxDropzoneAltComponent } from './ngx-dropzone-alt.component';
import { NgxDropzoneLabelDirective } from './ngx-dropzone-label.directive';
import { NgxDropzoneImagePreviewComponent } from './ngx-dropzone-preview/ngx-dropzone-image-preview/ngx-dropzone-image-preview.component';
import { NgxDropzonePreviewComponent } from './ngx-dropzone-preview/ngx-dropzone-preview.component';
import { NgxDropzoneRemoveBadgeComponent } from './ngx-dropzone-preview/ngx-dropzone-remove-badge/ngx-dropzone-remove-badge.component';
import { NgxDropzoneVideoPreviewComponent } from './ngx-dropzone-preview/ngx-dropzone-video-preview/ngx-dropzone-video-preview.component';
import { NgxDropzoneComponent } from './ngx-dropzone/ngx-dropzone.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxDropzoneAltComponent,
    NgxDropzoneComponent,
    NgxDropzoneLabelDirective,
    NgxDropzonePreviewComponent,
    NgxDropzoneImagePreviewComponent,
    NgxDropzoneRemoveBadgeComponent,
    NgxDropzoneVideoPreviewComponent,
  ],
  imports: [CommonModule],
  exports: [
    NgxDropzoneAltComponent,
    NgxDropzoneComponent,
    NgxDropzoneLabelDirective,
    NgxDropzonePreviewComponent,
    NgxDropzoneImagePreviewComponent,
    NgxDropzoneRemoveBadgeComponent,
    NgxDropzoneVideoPreviewComponent,
  ]
})
export class NgxDropzoneAltModule { }
