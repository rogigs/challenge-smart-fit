import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SmartFitService,
  UnitsLocations,
} from 'src/app/core/services/smart-fit.service';
import { recommendations } from 'src/app/core/utils/home/recommendations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  unitsLocations!: UnitsLocations;
  itensRecommendeds = recommendations;

  constructor(private smartFitService: SmartFitService) {}

  ngOnInit() {
    this.smartFitService.getUnitsLocations().subscribe((unitsLocations) => {
      console.log(unitsLocations);

      this.unitsLocations = unitsLocations;
    });
  }
}
