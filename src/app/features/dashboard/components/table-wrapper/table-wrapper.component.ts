import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'va-table-wrapper',
  templateUrl: './table-wrapper.component.html',
  styleUrls: ['./table-wrapper.component.scss'],
})
export class TableWrapperComponent {
  @Input() captureTitle = '';
  @Output() onAddUser = new EventEmitter<string>();

  public isFormVisible = false;

  constructor() { }

  public handleShowForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  public handleSubmit(payload: string): void {
    this.onAddUser.next(payload);
    this.isFormVisible = false;
  }
}
