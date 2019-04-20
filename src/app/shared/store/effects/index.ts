import { ErrorActionTypes, HttpErrorAction } from '../actions';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ErrorHandlingService } from '../../services';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class NotificationsEffects {
  constructor(
    private actions$: Actions,
    private service: ErrorHandlingService
  ) {}

  @Effect({ dispatch: false })
  showNotification$ = this.actions$.pipe(
    ofType<HttpErrorAction>(ErrorActionTypes.HANDLE_HTTP),
    map(action => action.payload.translationKey),
    tap(this.service.showMessage)
  );
}
