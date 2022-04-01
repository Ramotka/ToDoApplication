import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyListPage } from './my-list.page';
import { DateComponentModule } from '@date';
import { PhotosListComponentModule } from '@photos';
import { AddTaskComponentModule, FirebaseTasksServiceModule } from '@tasks';
import { TasksListViewComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/tasks-list-view.component-module';


@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: MyListPage,
        }
      ]),
  DateComponentModule,
  PhotosListComponentModule,
  AddTaskComponentModule,
  FirebaseTasksServiceModule,
  TasksListViewComponentModule
],
  	declarations: [MyListPage],
  	providers: [],
  	exports: [] })
export class MyListPageModule {
}
