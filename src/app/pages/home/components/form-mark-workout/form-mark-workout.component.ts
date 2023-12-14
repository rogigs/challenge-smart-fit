import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-mark-workout',
  templateUrl: './form-mark-workout.component.html',
  styleUrls: ['./form-mark-workout.component.sass'],
})
export class FormMarkWorkoutComponent {
  formGroup!: FormGroup;

  @Output() sendEventToFilterUnits = new EventEmitter<{
    hour: string;
    showClosedUnits: boolean;
  }>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosedUnits: true,
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);

    this.sendEventToFilterUnits.emit(this.formGroup.value);
  }

  onReset() {
    this.formGroup.reset();
  }
}
