import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_TASK_DTO,
  AddsTaskDtoPort,
} from '../../../application/ports/secondary/adds-task.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-add-task',
  templateUrl: './add-task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  readonly createTask: FormGroup = new FormGroup({
    task: new FormControl('', [Validators.required]),
  });

  constructor(
    @Inject(ADDS_TASK_DTO) private _addsTaskDto: AddsTaskDtoPort,
    private router: Router
  ) {}

  showAddBox: boolean = false;

  onAddTaskButtonClicked(showAddBox: boolean) {
    this.showAddBox = true;
  }

  onCancelClicked(showAddBox: boolean) {
    this.showAddBox = false;
  }

  onCreateTaskSubmited(createTask: FormGroup): void {
    if (createTask.invalid) {
      return;
    }
    this._addsTaskDto.add({
      name: createTask?.get('task')?.value,
      date: new Date().getTime(),
    });
    this.createTask.reset();
    this.showAddBox = false;
  }
}
