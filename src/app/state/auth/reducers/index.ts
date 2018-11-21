import * as fromAuth from './auth.reducers';
import * as fromRoot from '../../app/app.reducer';
import * as fromLoginPage from '../components/';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface AuthState {
  status: fromAuth.IState;
  loginPage: fromLoginPage.IState;
}

export interface IState extends fromRoot.IState {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  status: fromAuth.reducer,
  loginPage: fromLoginPage.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status,
);

export const getIsLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuth.getIsLoggedIn
);

export const getEmail = createSelector(
  selectAuthStatusState,
  fromAuth.getEmail
);

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);

export const getError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);

export const getIsPending = createSelector(
  selectLoginPageState,
  fromLoginPage.getIsPending
);
