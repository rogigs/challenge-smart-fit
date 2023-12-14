import { Component, Input } from '@angular/core';
import { recommendations } from 'src/app/core/utils/home/recommendations';

type Item = (typeof recommendations)[0];
@Component({
  selector: 'app-item-recommended',
  templateUrl: './item-recommended.component.html',
  styleUrls: ['./item-recommended.component.sass'],
})
export class ItemRecommendedComponent {
  @Input() item!: Item;
}
