import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromSnackBar from '../reducers';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {
  SnackbarOpenAction,
  ErrorActionTypes,
  HttpErrorAction
} from '../actions';

@Injectable()
export class NotificationsEffects {
  constructor(
    private actions: Actions,
    private snackbarState: Store<fromSnackBar.ISnackBarState>
  ) {}

  @Effect({ dispatch: false })
  showNotification = this.actions.pipe(
    ofType<HttpErrorAction>(ErrorActionTypes.HANDLE_HTTP),
    map(action =>
      this.snackbarState.dispatch(
        new SnackbarOpenAction({
          message: action.payload.userInfo,
          action: 'Success'
        })
      )
    )
  );
}
