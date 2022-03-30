import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyListPageModule } from './pages/my-list.page-module';
import { HomePageModule } from './pages/home.page-module';

const routes: Routes = [{ 
        path: 'my-list', 
        loadChildren: () => MyListPageModule
      },
  { 
        path: '', 
        loadChildren: () => HomePageModule
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
