import * as fromAuth from '../../../auth/store/reducers/';
import { AppState } from '../../../state/app.interface';
import { Store, select } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  email$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.email$ = this.store.pipe(select(fromAuth.getEmail));
  }
}
