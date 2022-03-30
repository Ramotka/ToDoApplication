import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './photos-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [PhotosListComponent],
  	providers: [],
  	exports: [PhotosListComponent] })
export class PhotosListComponentModule {
}
