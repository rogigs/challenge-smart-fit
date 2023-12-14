import { Component, OnInit } from '@angular/core';
import {
  SmartFitService,
  UnitLocation,
  UnitsLocations,
} from 'src/app/core/services/smart-fit.service';
import {
  Recommendations,
  recommendations,
} from 'src/app/core/utils/home/recommendations';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  unitsLocations!: UnitsLocations;
  itemsRecommended: Recommendations = recommendations;
  unitsFiltered: any = [];
  numberItems: number = 0;
  loading: boolean = true;

  constructor(private smartFitService: SmartFitService) {}

  ngOnInit() {
    this.smartFitService.getUnitsLocations().subscribe({
      next: (unitsLocations) => {
        this.unitsLocations = unitsLocations;
        this.numberItems = unitsLocations.locations.length;
      },
      error: (e) => console.error(e),
      complete: () => {
        this.loading = false;
      },
    });
  }

  whoIsToListItem(): UnitLocation[] {
    if (this.unitsFiltered.length) {
      return this.unitsFiltered;
    }

    return this.unitsLocations.locations;
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

    const reduceUnits = (accumulator: any[], unit: any) => {
      const reduceDays = (unitAccumulator: any[], schedule: any) => {
        if (
          weekday === schedule.weekdays &&
          isTimeSlotAvailable(schedule.hour)
        ) {
          unitAccumulator.push(unit);
        }
        return unitAccumulator;
      };

      const availableUnitsForDay: any[] = (unit?.schedules || []).reduce(
        reduceDays,
        []
      );

      return accumulator.concat(availableUnitsForDay);
    };

    const units: any[] = (this.unitsLocations?.locations || [])
      .filter(({ opened }) => {
        if ($event.showClosedUnits) {
          return $event.showClosedUnits;
        }

        return opened;
      })
      .reduce(reduceUnits, []);

    this.unitsFiltered = units;
    this.numberItems = units.length;
  }
}
