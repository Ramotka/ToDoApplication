import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MyListPage } from "./my-list.page";
import { DateComponentModule } from "@date";
import { FirebaseTasksServiceModule } from "@tasks";
import { TasksListViewComponentModule } from "@tasks";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: MyListPage,
      },
    ]),
    DateComponentModule,
    FirebaseTasksServiceModule,
    TasksListViewComponentModule,
  ],
  declarations: [MyListPage],
  providers: [],
  exports: [],
})
export class MyListPageModule {}
