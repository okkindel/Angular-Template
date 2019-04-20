import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICredentials } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() login: EventEmitter<ICredentials> = new EventEmitter();
  @Output() reset_pass = new EventEmitter();
  @Input() disabled = false;

  public credentials: ICredentials = {
    email: '',
    password: ''
  };
}
