import { AuthActionsUnion, AuthActionTypes } from '../../actions/';

export interface IState {
  error: string;
  isPending: boolean;
}

export const initialState: IState = {
  error: undefined,
  isPending: false
};

export function reducer(state = initialState, action: AuthActionsUnion): IState {
  switch (action.type) {
    case AuthActionTypes.Login: {
      return {
        ...state,
        error: undefined,
        isPending: true
      };
    }

    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        error: undefined,
        isPending: false
      };
    }

    case AuthActionTypes.LoginFailure: {
      return {
        ...state,
        error: action.payload,
        isPending: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: IState) => state.error;
export const getIsPending = (state: IState) => state.isPending;
