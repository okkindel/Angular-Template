import * as ThemesActions from '../../themes/store/actions';
import * as fromThemes from '../../themes/store/reducers';
import * as fromRoot from '../../state/app.reducer';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
