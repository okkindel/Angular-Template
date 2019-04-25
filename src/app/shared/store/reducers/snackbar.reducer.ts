import {
  SnackbarActionTypes,
  SnackbarActionUnion
} from '../actions/snackbar.action';

export interface ISnackBarState {
  show: boolean;
}

const initialState: ISnackBarState = {
  show: false
};

export function snackBarReducer(
  state: ISnackBarState = initialState,
  action: SnackbarActionUnion
) {
  switch (action.type) {
    case SnackbarActionTypes.SNACKBAR_CLOSE: {
      state.show = false;
      return state;
    }
    case SnackbarActionTypes.SNACKBAR_OPEN: {
      state.show = true;
      return state;
    }
    default:
      return state;
  }
}
