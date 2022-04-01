import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListViewComponent } from './tasks-list-view.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TasksListViewComponent],
  	providers: [],
  	exports: [TasksListViewComponent] })
export class TasksListViewComponentModule {
}
