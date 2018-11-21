import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ICredentials } from '../../models';
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
    password: '',
  };

  validate_password = () => this.re_password === this.credentials.password;

  validate = () => this.validate_password()
    && this.credentials.email !== ''
    && this.credentials.password !== ''

}
