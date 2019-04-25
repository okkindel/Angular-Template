import { SnackbarService } from './../../services/snakbar.service';
import { ErrorActionTypes, HttpErrorAction } from '../actions';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class NotificationsEffects {
  constructor(private actions$: Actions, private snackBar: SnackbarService) {}

  @Effect({ dispatch: false })
  showNotification$ = this.actions$.pipe(
    ofType<HttpErrorAction>(ErrorActionTypes.HANDLE_HTTP),
    map(action => action.payload.userInfo),
    tap(payload => this.snackBar.showMessage(payload))
  );
}
