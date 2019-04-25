import { NotyficationActionTypes, NotyficationActionUnion } from '../actions';
import { createFeatureSelector } from '@ngrx/store';

export interface ISnackBarState {
  show: boolean;
  message: string;
}

const initialState: ISnackBarState = {
  show: false,
  message: ''
};

export function notyficationReducer(
  state: ISnackBarState = initialState,
  action: NotyficationActionUnion
) {
  switch (action.type) {
    case NotyficationActionTypes.NOTYFICATION_OPEN: {
      state.message = action.payload;
      state.show = true;
      return state;
    }
    case NotyficationActionTypes.NOTYFICATION_CLOSE: {
      state.show = false;
      return state;
    }
    default:
      return state;
  }
}

export const getNotyficationMessage = createFeatureSelector<ISnackBarState>(
  'notyfication-state'
);
