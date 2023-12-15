import { Component, Input } from '@angular/core';
import { UnitLocation } from 'src/app/core/services/smart-fit.service';

@Component({
  selector: 'app-card-unit',
  templateUrl: './card-unit.component.html',
  styleUrls: ['./card-unit.component.sass'],
})
export class CardUnitComponent {
  @Input() unit!: UnitLocation;

  getCorrectImage(image: string): string {
    const patternImage = {
      forbidden: 'forbidden',
      partial: 'partial',
      recommended: 'recommended',
      required: 'required',
    }[image];

    if (patternImage) {
      return image;
    }

    const knowledgeIncorrectPattern =
      {
        allowed: 'required',
        not_allowed: 'forbidden',
        closed: 'forbidden',
      }[image] ?? '';

    return knowledgeIncorrectPattern;
  }
}
