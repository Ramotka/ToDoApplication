import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, RouterModule, ReactiveFormsModule],
  	declarations: [AddTaskComponent],
  	providers: [],
  	exports: [AddTaskComponent] })
export class AddTaskComponentModule {
}
