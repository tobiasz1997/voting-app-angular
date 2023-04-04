import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'va-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() size: 'small' | 'default' = 'default';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() action = new EventEmitter<void>();

  constructor() { }

  public handleClick(): void {
    this.action.next();
  }
}
