import { NgModule } from "@angular/core";
import { DateService } from "./date.service";
import { GETS_ALL_DATE_DTO } from "../../../application/ports/secondary/gets-all-date.dto-port";

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    DateService,
    { provide: GETS_ALL_DATE_DTO, useExisting: DateService },
  ],
  exports: [],
})
export class DateServiceModule {}
