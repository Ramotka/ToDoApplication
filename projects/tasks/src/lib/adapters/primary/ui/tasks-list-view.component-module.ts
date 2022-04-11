import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TasksListViewComponent } from "./tasks-list-view.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  imports: [CommonModule, BsDropdownModule.forRoot(), ModalModule.forRoot()],
  declarations: [TasksListViewComponent],
  providers: [],
  exports: [TasksListViewComponent],
})
export class TasksListViewComponentModule {}
