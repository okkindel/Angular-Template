import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../state/app/app.reducer';
import * as fromThemes from '../../state/themes/reducers';
import * as ThemesActions from '../../state/themes/actions/themes.actions';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  themeChoosen$: Observable<string>;

  constructor(private store: Store<fromRoot.IState>) {
    this.themeChoosen$ = this.store.pipe(select(fromThemes.getTheme));
  }

  public changeTheme(theme) {
    this.store.dispatch(new ThemesActions.ChangeTheme(theme));
    localStorage.theme = theme;
  }
}
