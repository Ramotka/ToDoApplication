import { BsDropdownConfig } from "ngx-bootstrap/dropdown";
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from "@angular/core";
import { Observable, map } from "rxjs";
import { TaskDTO } from "../../../application/ports/secondary/task.dto";
import {
  GETS_ALL_TASK_DTO,
  GetsAllTaskDtoPort,
} from "../../../application/ports/secondary/gets-all-task.dto-port";
import {
  REMOVES_TASK_DTO,
  RemovesTaskDtoPort,
} from "../../../application/ports/secondary/removes-task.dto-port";
import {
  SETS_TASK_DTO,
  SetsTaskDtoPort,
} from "../../../application/ports/secondary/sets-task.dto-port";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

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
  tasksList$: Observable<TaskDTO[]> = this._getsAllTaskDto
    .getAll()
    .pipe(
      map((tasksList: TaskDTO[]) =>
        tasksList.sort((a, b) => a.date - b.date).reverse()
      )
    );

  constructor(
    private modalService: BsModalService,
    @Inject(GETS_ALL_TASK_DTO) private _getsAllTaskDto: GetsAllTaskDtoPort,
    @Inject(REMOVES_TASK_DTO) private _removesTaskDto: RemovesTaskDtoPort,
    @Inject(SETS_TASK_DTO) private _setsTaskDto: SetsTaskDtoPort
  ) {}

  onDeleteTaskClicked(task: Partial<TaskDTO>): void {
    this._removesTaskDto.remove("" + task.id);
  }

  onTaskDoneChangeed(task: Partial<TaskDTO>): void {
    if (task.done) {
      this._setsTaskDto.set({
        id: task.id,
        name: task.name,
        done: false,
      });
    } else {
      this._setsTaskDto.set({
        id: task.id,
        name: task.name,
        done: true,
      });
    }
  }

  modalRef?: BsModalRef;
  message?: string;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-md" });
  }

  confirm(): void {
    this.modalRef?.hide();
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
