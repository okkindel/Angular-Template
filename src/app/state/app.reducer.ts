import { IRouterStateUrl } from '../shared/utils/serializer';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface IState {
  router: fromRouter.RouterReducerState<IRouterStateUrl>;
}

export const reducers: ActionReducerMap<IState> = {
  router: fromRouter.routerReducer
};
