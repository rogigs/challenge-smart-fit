import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export type FormFindUnit = {
  hour: string;
  showClosedUnits: boolean;
};

@Component({
  selector: 'app-form-find-unit',
  templateUrl: './form-find-unit.component.html',
  styleUrls: ['./form-find-unit.component.sass'],
})
export class FormFindUnitComponent {
  @Input() numberItems!: number;
  formGroup!: FormGroup;
  messageError!: string;

  @Output() sendEventToFilterUnits = new EventEmitter<FormFindUnit>();

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
