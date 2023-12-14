import { Component, Input } from '@angular/core';
import { mockResponseUnitsLocations } from 'src/app/core/services/responses/smart-fit.response';

type Units = (typeof mockResponseUnitsLocations.locations)[0];
@Component({
  selector: 'app-card-unity',
  templateUrl: './card-unity.component.html',
  styleUrls: ['./card-unity.component.sass'],
})
export class CardUnityComponent {
  @Input() units: Units | {} = {};
}
