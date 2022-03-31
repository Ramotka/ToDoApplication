import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyListPage } from './my-list.page';
import { DateComponentModule } from '@date';
import { PhotosListComponentModule } from '@photos';
import { AddTaskComponentModule, FirebaseTasksServiceModule } from '@tasks';

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
],
  	declarations: [MyListPage],
  	providers: [],
  	exports: [] })
export class MyListPageModule {
}
