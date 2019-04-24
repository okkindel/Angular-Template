import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { IRouterStateUrl } from './serializer';

export interface IState {
  router: fromRouter.RouterReducerState<IRouterStateUrl>;
}

export const reducers: ActionReducerMap<IState> = {
  router: fromRouter.routerReducer
};
