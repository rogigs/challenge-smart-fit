import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUnitComponent } from './card-unit.component';

describe('CardUnitComponent', () => {
  let component: CardUnitComponent;
  let fixture: ComponentFixture<CardUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUnitComponent],
    });
    fixture = TestBed.createComponent(CardUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
