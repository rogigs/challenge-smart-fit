import { Component, OnInit } from '@angular/core';
import {
  SmartFitService,
  UnitsLocations,
} from 'src/app/core/services/smart-fit.service';
import { recommendations } from 'src/app/core/utils/home/recommendations';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  unitsLocations!: UnitsLocations;
  itensRecommendeds = recommendations;
  unitsFiltered: any = [];

  constructor(private smartFitService: SmartFitService) {}

  ngOnInit() {
    this.smartFitService.getUnitsLocations().subscribe((unitsLocations) => {
      console.log(unitsLocations);

      this.unitsLocations = unitsLocations;
    });
  }

  filterUnits($event: { hour: string; showClosedUnits: boolean }) {
    const today = new Date();
    const weekToday = format(today, 'EEEE', { locale: enUS });
    const weekday = {
      Sunday: 'Dom.',
      Monday: 'Seg. à Sex.',
      Tuesday: 'Seg. à Sex.',
      Wednesday: 'Seg. à Sex.',
      Thursday: 'Seg. à Sex.',
      Friday: 'Seg. à Sex.',
      Saturday: 'Sáb.',
    }[weekToday];

    const getHours = (hour: string): [number, number] => {
      const hourFirst = parseInt(hour.substring(0, 2));
      const hourFinish = parseInt(hour.substring(2));

      return [hourFirst, hourFinish];
    };

    const isTimeSlotAvailable = (hourSchedule: string): boolean => {
      const [unitFirst, unitLast] = getHours(hourSchedule);
      const [eventFirst, eventLast] = getHours($event.hour.replace(/\D/g, ''));

      return eventFirst >= unitFirst || unitLast <= eventLast;
    };

    const units =
      this.unitsLocations?.locations?.reduce((accumulator, unit) => {
        const availableUnitsForDay = unit?.schedules?.reduce(
          (unitAccumulator: any, schedule) => {
            if (
              weekday === schedule.weekdays &&
              isTimeSlotAvailable(schedule.hour)
            ) {
              unitAccumulator.push(unit);
            }

            return unitAccumulator;
          },
          []
        );

        return accumulator.concat(availableUnitsForDay);
      }, []) || [];

    this.unitsFiltered = units;
    console.log(
      '🚀 ~ file: home.component.ts:77 ~ HomeComponent ~ filterUnits ~ this.unitsFiltered:',
      this.unitsFiltered
    );
  }
}
