import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyListPage } from './my-list.page';
import { DateComponentModule } from '../../../projects/date/src/lib/adapters/primary/ui/date.component-module';
import { PhotosListComponentModule } from '../../../projects/photos/src/lib/adapters/primary/ui/photos-list.component-module';
import { AddTaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/add-task.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: MyListPage,
        }
      ]),
  DateComponentModule,
  PhotosListComponentModule,
  AddTaskComponentModule
],
  	declarations: [MyListPage],
  	providers: [],
  	exports: [] })
export class MyListPageModule {
}
