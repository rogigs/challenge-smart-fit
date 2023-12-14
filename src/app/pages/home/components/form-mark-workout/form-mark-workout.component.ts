import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-mark-workout',
  templateUrl: './form-mark-workout.component.html',
  styleUrls: ['./form-mark-workout.component.sass'],
})
export class FormMarkWorkoutComponent {
  @Input() numberItems!: number;
  formGroup!: FormGroup;
  messageError!: string;

  @Output() sendEventToFilterUnits = new EventEmitter<{
    hour: string;
    showClosedUnits: boolean;
  }>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      hour: undefined,
      showClosedUnits: false,
    });
  }

  onValidate(): boolean {
    if (!this.formGroup.value.hour) {
      this.messageError = 'Por favor preencha o formulário';
      return false;
    }

    return true;
  }

  onSubmit() {
    if (this.onValidate()) {
      this.sendEventToFilterUnits.emit(this.formGroup.value);
      this.messageError = '';
    }
  }

  onReset() {
    this.formGroup.reset();
  }
}
