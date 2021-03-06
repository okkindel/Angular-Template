import * as fromThemes from '../../../themes/store/reducers';
import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  theme: String;
  @Input() color;

  constructor(private store: Store<fromThemes.IState>) {}

  ngOnInit() {
    this.store
      .pipe(select(fromThemes.getTheme))
      .subscribe(res => (this.theme = res));
    if (!this.color) {
      this.color = this.theme;
    }
  }
}
