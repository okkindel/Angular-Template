
import { Themes } from '../../../themes/models/themes.enum';
import { ThemesActionsUnion, ThemesActions } from '../actions/themes.actions';
import {
    createFeatureSelector,
    createSelector
} from '@ngrx/store';

export interface IState {
    currentTheme: string;
}

export const initialState: IState = {
    currentTheme: localStorage.theme || Themes.Dark
};

export function reducer(state = initialState, action: ThemesActionsUnion): IState {
    switch (action.type) {
        case ThemesActions.ChangeTheme: {
            return {
                ...state,
                currentTheme: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export const getThemesState = createFeatureSelector<IState>('themes');

export const getTheme = createSelector(
    getThemesState,
    (state: IState) => state.currentTheme
);
