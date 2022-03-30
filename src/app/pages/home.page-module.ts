import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { DateComponentModule } from '@date';
import { PhotosListComponentModule } from '../../../projects/photos/src/lib/adapters/primary/ui/photos-list.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  DateComponentModule,
  PhotosListComponentModule
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
