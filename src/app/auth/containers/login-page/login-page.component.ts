import * as AuthActions from '../../../auth/store/actions/';
import { SnackbarService } from '../../../shared/services';
import * as fromAuth from '../../../auth/store/reducers/';
import { Store, select } from '@ngrx/store';
import { ICredentials } from '../../models';
import { Component } from '@angular/core';
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
    private snackBar: SnackbarService
  ) {
    this.errorMessage$ = store.pipe(
      select(fromAuth.getError),
      filter(err => err !== undefined)
    );
    this.isPending$ = store.pipe(select(fromAuth.getIsPending));
  }

  login(credentials: ICredentials) {
    this.store.dispatch(new AuthActions.Login(credentials));

    this.errorMessage$.subscribe(response =>
      this.snackBar.showMessage(
        response.error.status || 'No server connection.'
      )
    );
  }
}
