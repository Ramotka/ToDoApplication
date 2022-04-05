import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Observable, of } from "rxjs";
import { DateDTO } from "../../../application/ports/secondary/date.dto";

@Component({
  selector: "lib-date",
  templateUrl: "./date.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent {
  todayDate$: Observable<DateDTO> = of({
    currentDate: new Date(),
  });
  //   Ktora wersja lespza?
  dateToday = new Date();
}
