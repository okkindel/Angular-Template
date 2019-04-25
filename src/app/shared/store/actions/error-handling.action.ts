import { IErrorResponse } from '../../models';
import { Action } from '@ngrx/store';

export enum ErrorActionTypes {
  HANDLE_HTTP = '[ERROR]: handled http error response'
}

export class HttpErrorAction implements Action {
  readonly type = ErrorActionTypes.HANDLE_HTTP;
  constructor(public payload?: IErrorResponse) {}
}

export type ErrorActionsUnion = HttpErrorAction;
