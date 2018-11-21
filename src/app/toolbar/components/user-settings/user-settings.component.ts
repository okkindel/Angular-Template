import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent {

  @Input() email: string;
  @Output() logout = new EventEmitter;

  constructor() { }
}
