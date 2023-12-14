import { Component, Input } from '@angular/core';
import { UnitLocation } from 'src/app/core/services/smart-fit.service';

@Component({
  selector: 'app-card-unity',
  templateUrl: './card-unity.component.html',
  styleUrls: ['./card-unity.component.sass'],
})
export class CardUnityComponent {
  @Input() unit!: UnitLocation;
}
