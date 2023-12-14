import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUnityComponent } from './card-unity.component';

describe('CardUnityComponent', () => {
  let component: CardUnityComponent;
  let fixture: ComponentFixture<CardUnityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUnityComponent]
    });
    fixture = TestBed.createComponent(CardUnityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
