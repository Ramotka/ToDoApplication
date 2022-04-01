import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { Observable } from "rxjs";
import { TaskDTO } from "../../../application/ports/secondary/task.dto";
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from "../../../application/ports/secondary/gets-all-task.dto-port";

@Component({
  selector: "lib-tasks-list-view",
  templateUrl: "./tasks-list-view.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListViewComponent {
  tasksList$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort
  ) {}
}
