import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomePage } from "./home.page";
import { DateComponentModule, DateServiceModule } from "@date";
import { PhotosListComponentModule } from "@photos";
import { FirebasePhotosServiceModule } from "@photos";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
      },
    ]),
    DateComponentModule,
    PhotosListComponentModule,
    FirebasePhotosServiceModule,
    DateServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
