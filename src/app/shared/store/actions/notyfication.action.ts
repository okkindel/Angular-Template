import { MatSnackBarConfig } from '@angular/material';
import { Action } from '@ngrx/store';

export enum NotyficationActionTypes {
  NOTYFICATION_OPEN = '[NOTYFICATION]: open notyfication',
  NOTYFICATION_CLOSE = '[NOTYFICATION]: close notyfication'
}

export class NotyficationOpenAction implements Action {
  readonly type = NotyficationActionTypes.NOTYFICATION_OPEN;
  constructor(
    public payload: {
      message: string;
      config?: MatSnackBarConfig;
    }
  ) {}
}

export class NotyficationCloseAction implements Action {
  readonly type = NotyficationActionTypes.NOTYFICATION_CLOSE;
}

export type NotyficationActionUnion =
  | NotyficationOpenAction
  | NotyficationCloseAction;
