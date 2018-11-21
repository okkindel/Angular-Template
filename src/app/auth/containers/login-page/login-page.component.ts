import * as AuthActions from '../../../state/auth/actions/';
import { SnackbarService, PasswordService } from '../../../shared/services';
import * as fromAuth from '../../../state/auth/reducers/';
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICredentials } from '../../models';
import { isNil, not, compose } from 'ramda';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  errorMessage$: Observable<any>;
  isPending$: Observable<boolean>;

  constructor(
    private store: Store<fromAuth.IState>,
    private snackBar: SnackbarService) {
    this.errorMessage$ = store.pipe(
      select(fromAuth.getError),
      filter(compose(not, isNil))
    );
    this.isPending$ = store.pipe(select(fromAuth.getIsPending));
  }

  login(credentials: ICredentials) {
    this.store.dispatch(new AuthActions.Login(credentials));

    this.errorMessage$.subscribe(
      response => this.snackBar.showMessage(response.error.status || 'No server connection.')
    );
  }
}
