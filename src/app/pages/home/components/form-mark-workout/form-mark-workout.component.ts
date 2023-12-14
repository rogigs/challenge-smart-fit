import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-mark-workout',
  templateUrl: './form-mark-workout.component.html',
  styleUrls: ['./form-mark-workout.component.sass'],
})
export class FormMarkWorkoutComponent {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosedUnits: true,
    });

    console.log(this.formGroup);
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  onReset() {
    this.formGroup.reset();
  }
}
