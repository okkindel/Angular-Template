import { InfoService } from 'src/app/shared/services/info.service';
import * as AuthActions from '../../../auth/store/actions/';
import * as fromAuth from '../../../auth/store/reducers/';
import { AppState } from '../../../state/app.interface';
import { Store, select } from '@ngrx/store';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  email$: Observable<string>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private infoService: InfoService
  ) {
    this.email$ = this.store.pipe(select(fromAuth.getEmail));
  }

  public logout() {
    this.store.dispatch(new AuthActions.Logout());
    this.infoService.showInfo('You were successfully logged out.');
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }
  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
