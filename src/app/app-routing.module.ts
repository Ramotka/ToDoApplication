import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyListPageModule } from './pages/my-list.page-module';
import { HomePageModule } from './pages/home.page-module';
import { AddTaskPageModule } from './pages/add-task.page-module';

const routes: Routes = [{ 
        path: 'my-list', 
        loadChildren: () => MyListPageModule
      },
  { 
        path: '', 
        loadChildren: () => HomePageModule
      },
  { 
        path: 'add-task', 
        loadChildren: () => AddTaskPageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
