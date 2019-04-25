import { Actions, Effect, ofType } from '@ngrx/effects';
import { delay, map, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';
import {
  SnackbarActionTypes,
  SnackbarCloseAction,
  SnackbarOpenAction
} from '../actions';

@Injectable()
export class SnackbarEffects {
  constructor(private actions$: Actions, private matSnackBar: MatSnackBar) {}

  @Effect()
  showSnackbar$ = this.actions$.pipe(
    ofType<SnackbarOpenAction>(SnackbarActionTypes.SNACKBAR_OPEN),
    tap(console.log)
    // map((action: SnackbarOpenAction) => action.payload),
    // tap(payload =>
    //   this.matSnackBar.open(payload.message, payload.action, payload.config)
    // ),
    // delay(2000),
    // map(() => new SnackbarCloseAction())
  );

  @Effect({ dispatch: false })
  closeSnackbar$ = this.actions$.pipe(
    ofType(SnackbarActionTypes.SNACKBAR_CLOSE),
    tap(() => this.matSnackBar.dismiss())
  );
}
