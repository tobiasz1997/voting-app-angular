import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ISelectOption } from "@shared/interfaces/select-option.interface";
import { IVoteForm } from "@features/dashboard/interfaces/vote-form.interface";

@Component({
  selector: 'va-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.scss']
})
export class VoteFormComponent {
  @Input() votersList: Array<ISelectOption> | null = [];
  @Input() candidatesList: Array<ISelectOption> | null = [];
  @Output() onSubmit = new EventEmitter<IVoteForm>();

  public formGroup: FormGroup;

  get voterControl() { return this.formGroup.get('voterId'); }
  get candidateControl() { return this.formGroup.get('candidateId'); }

  constructor() {
    this.formGroup = this.buildForm();
  }

  public handleSubmit(): void {
    this.formGroup.markAllAsTouched();
    this.formGroup.updateValueAndValidity();

    if (this.formGroup.valid) {
      this.onSubmit.next(this.formGroup.value)
      this.formGroup.reset();
    }
  }

  private buildForm(): FormGroup {
    return new FormGroup(
      {
        voterId: new FormControl<string | null>(
          null,
          [Validators.required]
        ),
        candidateId: new FormControl<string | null>(
          null,
          [Validators.required]
        ),
      },
      {
        updateOn: 'submit',
      }
    );
  }
}
