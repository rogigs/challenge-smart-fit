import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFindUnitComponent } from './form-find-unit.component';

describe('FormFindUnitComponent', () => {
  let component: FormFindUnitComponent;
  let fixture: ComponentFixture<FormFindUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFindUnitComponent]
    });
    fixture = TestBed.createComponent(FormFindUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
