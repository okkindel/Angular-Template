import { ErrorActionsUnion, ErrorActionTypes } from '../actions';
import { createFeatureSelector } from '@ngrx/store';
import { IErrorResponse } from '../../models';

export interface IErrorState {
  errors: IErrorResponse[];
}
export const initialState: IErrorState = { errors: [] };

export function errorReducer(
  state: IErrorState = initialState,
  action: ErrorActionsUnion
): IErrorState {
  switch (action.type) {
    case ErrorActionTypes.HANDLE_HTTP: {
      state.errors.push(action.payload);
      return state;
    }
    default: {
      return state;
    }
  }
}

export const getErrorsState = createFeatureSelector<IErrorState>('error-state');
