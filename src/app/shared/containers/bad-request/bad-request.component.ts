import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromThemes from '../../../state/themes/reducers';

@Component({
  selector: 'app-bad-request',
  templateUrl: './bad-request.component.html',
  styleUrls: ['./bad-request.component.scss']
})
export class BadRequestComponent implements OnInit {

  theme: String;

  constructor(private store: Store<fromThemes.IState>) { }

  ngOnInit() {
    this.store.pipe(select(fromThemes.getTheme)).subscribe(res => this.theme = res);
  }

}
