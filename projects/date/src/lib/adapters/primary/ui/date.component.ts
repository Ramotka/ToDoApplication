import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { Observable, of } from "rxjs";
import { DateDTO } from "../../../application/ports/secondary/date.dto";
import {
  GETS_ALL_DATE_DTO,
  GetsAllDateDtoPort,
} from "../../../application/ports/secondary/gets-all-date.dto-port";

@Component({
  selector: "lib-date",
  templateUrl: "./date.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateComponent {
  currentDate$: Observable<DateDTO> = this._getsAllDateDto.getAll();

  constructor(
    @Inject(GETS_ALL_DATE_DTO) private _getsAllDateDto: GetsAllDateDtoPort
  ) {}
}
