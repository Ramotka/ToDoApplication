import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyListPage } from './my-list.page';
import { DateComponentModule, DateServiceModule } from '@date';
import { FirebaseTasksServiceModule } from '@tasks';
import { TasksListViewComponentModule } from '@tasks';
import { AddTaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/add-task.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyListPage,
      },
    ]),
    DateComponentModule,
    FirebaseTasksServiceModule,
    TasksListViewComponentModule,
    DateServiceModule,
    AddTaskComponentModule,
  ],
  declarations: [MyListPage],
  providers: [],
  exports: [],
})
export class MyListPageModule {}
