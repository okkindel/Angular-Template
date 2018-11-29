import { ActionReducer } from '@ngrx/store';
import { AppState } from './app/app.interface';

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    // console.log('state', state);
    // console.log('action', action);
    return reducer(state, action);
  };
}
