import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstTaskPage } from './first-task.page';
import { DateComponentModule } from '../../../projects/date/src/lib/adapters/primary/ui/date.component-module';
import { DateServiceModule } from '../../../projects/date/src/lib/adapters/secondary/infrastructure/date.service-module';
import { AddTaskComponentModule } from '../../../projects/tasks/src/lib/adapters/primary/ui/add-task.component-module';
import { FirebaseTasksServiceModule } from '../../../projects/tasks/src/lib/adapters/secondary/infrastructure/firebase-tasks.service-module';
import { PhotosListComponentModule } from '../../../projects/photos/src/lib/adapters/primary/ui/photos-list.component-module';
import { FirebasePhotosServiceModule } from '../../../projects/photos/src/lib/adapters/secondary/infrastructure/firebase-photos.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: FirstTaskPage,
        }
      ]),
  DateComponentModule,
  DateServiceModule,
  AddTaskComponentModule,
  FirebaseTasksServiceModule,
  PhotosListComponentModule,
  FirebasePhotosServiceModule
],
  	declarations: [FirstTaskPage],
  	providers: [],
  	exports: [] })
export class FirstTaskPageModule {
}
