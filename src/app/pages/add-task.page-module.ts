import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AddTaskPage } from "./add-task.page";
import { DateComponentModule } from "@date";
import {
  FirebasePhotosServiceModule,
  PhotosListComponentModule,
} from "@photos";
import {
  TasksListViewComponentModule,
  FirebaseTasksServiceModule,
  AddTaskComponentModule,
} from "@tasks";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: AddTaskPage,
      },
    ]),
    DateComponentModule,
    PhotosListComponentModule,
    TasksListViewComponentModule,
    FirebaseTasksServiceModule,
    AddTaskComponentModule,
    FirebasePhotosServiceModule,
  ],
  declarations: [AddTaskPage],
  providers: [],
  exports: [],
})
export class AddTaskPageModule {}
