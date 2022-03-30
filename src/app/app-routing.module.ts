import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyListPageModule } from './pages/my-list.page-module';

const routes: Routes = [{ 
        path: '', 
        loadChildren: () => MyListPageModule
      }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
