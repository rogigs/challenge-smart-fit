import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRecommendedComponent } from './item-recommended.component';

describe('ItemRecommendedComponent', () => {
  let component: ItemRecommendedComponent;
  let fixture: ComponentFixture<ItemRecommendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemRecommendedComponent]
    });
    fixture = TestBed.createComponent(ItemRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
