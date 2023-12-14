import { Component, LOCALE_ID, OnInit, Inject } from '@angular/core';
import {
  SmartFitService,
  UnitsLocations,
} from 'src/app/core/services/smart-fit.service';
import { recommendations } from 'src/app/core/utils/home/recommendations';
import { DatePipe } from '@angular/common';
import { scheduled } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  unitsLocations!: UnitsLocations;
  itensRecommendeds = recommendations;
  message!: string;

  constructor(
    private datePipe: DatePipe,
    @Inject(LOCALE_ID) private locale: string,
    private smartFitService: SmartFitService
  ) {}

  ngOnInit() {
    this.smartFitService.getUnitsLocations().subscribe((unitsLocations) => {
      console.log(unitsLocations);

      this.unitsLocations = unitsLocations;
    });
  }

  filterUnits($event: { hour: string; showClosedUnits: boolean }) {
    // const today = new Date();
    // const weekAndHourNow = this.datePipe.transform(
    //   today,
    //   'EEEE, HH:mm:ss',
    //   undefined,
    //   this.locale
    // );

    const a: string[][] = this.unitsLocations?.locations?.map((unit) =>
      unit?.schedules?.map((schedule) => {
        const hour = schedule?.hour?.replace(/\D/g, '');
        console.log(
          '🚀 ~ file: home.component.ts:46 ~ HomeComponent ~ unit?.schedules?.map ~ hour:',
          hour
        );

        if (!hour) {
          return 'Sem horário';
        }

        const hourChoosen = hour.replace(/\D/g, '');

        if (hourChoosen) {
        }

        return 'Tem horário';
      })
    );

    console.log(a);
    console.log('a');

    // need to PT-BR
    console.log($event);
  }
}
