import { BsDropdownConfig } from "ngx-bootstrap/dropdown";
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
import {
  REMOVES_TASK_DTO,
  RemovesTaskDtoPort,
} from "../../../application/ports/secondary/removes-task.dto-port";

@Component({
  selector: "lib-tasks-list-view",
  templateUrl: "./tasks-list-view.component.html",
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksListViewComponent {
  tasksList$: Observable<TaskDTO[]> = this._getsAllTaskDto.getAll();

  constructor(
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort
  ) {}

  onDeleteTaskClicked(task: Partial<TaskDTO>): void {
    this._removesTaskDto.remove("" + task.id);
  }
}
