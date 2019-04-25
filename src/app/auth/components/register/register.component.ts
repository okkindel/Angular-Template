import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ICredentials } from '../../models';
import { isNil, equals } from 'ramda';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  re_password: String = '';

  @Input() disabled = false;
  @Output() register: EventEmitter<ICredentials> = new EventEmitter();

  public credentials: ICredentials = {
    email: '',
    password: ''
  };

  validate_password = () => equals(this.re_password, this.credentials.password);

  validate = () =>
    this.validate_password() &&
    !isNil(this.credentials.email) &&
    !isNil(this.credentials.password);
}
