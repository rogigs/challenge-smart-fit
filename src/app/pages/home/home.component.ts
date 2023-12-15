import { Component, OnInit } from '@angular/core';
import {
  SmartFitService,
  UnitLocation,
} from 'src/app/core/services/smart-fit.service';
import {
  Recommendations,
  recommendations,
} from 'src/app/core/utils/home/recommendations';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { FormFindUnit } from './components/form-find-unit/form-find-unit.component';

type Schedule = {
  weekdays: string;
  hour: string;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  loading: boolean = true;
  numberItems: number = 0;
  itemsRecommended: Recommendations = recommendations;
  unitsLocations!: UnitLocation[];
  unitsFiltered: UnitLocation[] = [];

  constructor(private smartFitService: SmartFitService) {}

  ngOnInit() {
    this.smartFitService.getUnitsLocations().subscribe({
      next: (unitsLocations) => {
        const filterLocations = unitsLocations.locations.filter(
          (location) => location?.schedules
        );

        this.unitsLocations = filterLocations;

        this.numberItems = filterLocations.length;
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

    return this.unitsLocations;
  }

  getToday(): string {
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
    }[weekToday] as string;

    return weekday;
  }

  getHours = (hour: string): [number, number] => {
    const hourFirst = parseInt(hour.substring(0, 2));
    const hourFinish = parseInt(hour.substring(2));

    return [hourFirst, hourFinish];
  };

  filterUnits($event: FormFindUnit) {
    const isTimeSlotAvailable = (hourSchedule: string): boolean => {
      const [unitFirst, unitLast] = this.getHours(hourSchedule);
      const [eventFirst, eventLast] = this.getHours(
        $event.hour.replace(/\D/g, '')
      );

      return eventFirst >= unitFirst || unitLast <= eventLast;
    };

    const reduceUnits = (accumulator: UnitLocation[], unit: UnitLocation) => {
      const reduceDays = (
        unitAccumulator: UnitLocation[],
        schedule: Schedule
      ) => {
        if (
          this.getToday() === schedule.weekdays &&
          isTimeSlotAvailable(schedule.hour)
        ) {
          unitAccumulator.push(unit);
        }
        return unitAccumulator;
      };

      const availableUnitsForDay: UnitLocation[] = unit.schedules.reduce(
        reduceDays,
        []
      );

      return accumulator.concat(availableUnitsForDay);
    };

    const units: UnitLocation[] = this.unitsLocations
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
