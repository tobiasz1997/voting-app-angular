import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'va-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss']
})
export class AddUserFormComponent {
  @Output() onSubmit = new EventEmitter<string>();

  public formGroup: FormGroup;

  get nameControl() { return this.formGroup.get('name'); }

  constructor() {
    this.formGroup = this.buildForm();
  }

  public handleSubmit(): void {
    this.formGroup.markAllAsTouched();
    this.formGroup.updateValueAndValidity();

    if (this.formGroup.valid) {
      this.onSubmit.next(this.formGroup.value.name)
      this.formGroup.reset();
    }
  }

  private buildForm(): FormGroup {
    return new FormGroup(
      {
        name: new FormControl<string | null>(
          '',
          [Validators.required]
        ),
      }, {
        updateOn: 'submit'
      }
    );
  }
}
