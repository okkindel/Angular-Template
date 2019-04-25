import { MatSnackBarConfig } from '@angular/material';
import { Action } from '@ngrx/store';

export enum SnackbarActionTypes {
  SNACKBAR_OPEN = '[SNACKBER]: open snackbar',
  SNACKBAR_CLOSE = '[SNACKBER]: close snackbar'
}

export class SnackbarOpenAction implements Action {
  readonly type = SnackbarActionTypes.SNACKBAR_OPEN;

  constructor(
    public payload: {
      message: string;
      action?: string;
      config?: MatSnackBarConfig;
    }
  ) {}
}

export class SnackbarCloseAction implements Action {
  readonly type = SnackbarActionTypes.SNACKBAR_CLOSE;
}

export type SnackbarActionUnion = SnackbarOpenAction | SnackbarCloseAction;
