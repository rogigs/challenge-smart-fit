import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMarkWorkoutComponent } from './form-mark-workout.component';

describe('FormMarkWorkoutComponent', () => {
  let component: FormMarkWorkoutComponent;
  let fixture: ComponentFixture<FormMarkWorkoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormMarkWorkoutComponent]
    });
    fixture = TestBed.createComponent(FormMarkWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
