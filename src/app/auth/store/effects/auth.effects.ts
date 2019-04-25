import { SnackbarService } from './../../../shared/services/snakbar.service';
import * as fromNotyficatons from '../../../shared/store/reducers';
import { NotyficationOpenAction } from 'src/app/shared/store/actions';
import { AuthService } from '../../../auth/services/auth.service';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { IUser } from '../../../auth/models';
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  AuthActionTypes,
  LoginFailure,
  LoginSuccess,
  Login
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => action.payload),
    exhaustMap((credentials: IUser) =>
      this.authService.login(credentials.email, credentials.password).pipe(
        map(auth =>
          auth
            ? new LoginSuccess({ email: credentials.email, token: auth.token })
            : new LoginFailure(false)
        ),
        catchError(error => observableOf(new LoginFailure(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginSuccess),
    tap((action: LoginSuccess) => {
      localStorage.setItem('token', action.payload.token);
      this.store.dispatch(
        new NotyficationOpenAction('You were successfully logged in.')
      );
    })
  );

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect),
    tap(() => this.snackBar.showMessage('Access denied, redirecting...')),
    tap(() => this.router.navigate(['login']))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(AuthActionTypes.Logout),
    tap(() => {
      localStorage.removeItem('token');
      this.store.dispatch(
        new NotyficationOpenAction('You were successfully logged out.')
      );
    })
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private snackBar: SnackbarService,
    private store: Store<fromNotyficatons.ISnackBarState>
  ) {}
}
