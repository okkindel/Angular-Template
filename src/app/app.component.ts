import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import * as fromThemes from './themes/store/reducers';
import { Themes } from './themes/models/themes.enum';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') styleClass;

  constructor(
    private store: Store<fromThemes.IState>,
    public overlayContainer: OverlayContainer
  ) {}

  ngOnInit(): void {
    const state = this.store.pipe(select(fromThemes.getTheme));
    state.subscribe(data => this.selectTheme(data));
  }

  selectTheme(theme) {
    Object.keys(Themes).forEach(item => {
      this.overlayContainer
        .getContainerElement()
        .classList.remove(Themes[item]);
    });
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.styleClass = theme;
  }
}
