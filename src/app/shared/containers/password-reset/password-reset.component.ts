import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromThemes from '../../../state/themes/reducers';
import { PasswordService, InfoService, SnackbarService } from '../../services';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  disabled = false;
  message: String;
  theme: String;

  email = '';
  pass = '';

  constructor(
    private service: PasswordService,
    private infoSevice: InfoService,
    private store: Store<fromThemes.IState>,
    private snackBar: SnackbarService) { }

  ngOnInit(): void {
    this.message = this.service.message;
    this.store.pipe(select(fromThemes.getTheme)).subscribe(res => this.theme = res);
  }

  validate = () => this.email !== '' && this.pass !== '';

  submit() {
    this.disabled = true;
    this.service.resetPassword(this.email, this.pass)
      .subscribe(
        response => {
          this.infoSevice.showInfo('Your password is changed.');
        },
        error => {
          this.disabled = false;
          this.snackBar.showMessage(error.error.status || 'No server connection');
        });
  }
}
