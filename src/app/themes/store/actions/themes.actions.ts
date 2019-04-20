import { Action } from '@ngrx/store';

export enum ThemesActions {
    ChangeTheme = '[Themes] Change Theme'
}

export type ThemesActionsUnion
    = ChangeTheme;

export class ChangeTheme implements Action {
    readonly type = ThemesActions.ChangeTheme;

    constructor(public payload?: any) { }
}
