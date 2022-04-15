import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFirstTaskComponent } from './add-first-task.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [AddFirstTaskComponent],
  providers: [],
  exports: [AddFirstTaskComponent],
})
export class AddFirstTaskComponentModule {}
