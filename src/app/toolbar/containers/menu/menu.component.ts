import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as AuthActions from '../../../state/auth/actions/';
import * as fromAuth from '../../../state/auth/reducers/';
import { Router } from '@angular/router';
import { AppState } from '../../../state/app/app.interface';
import { Store, select } from '@ngrx/store';
import { InfoService } from 'src/app/shared/services/info.service';


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
    private infoService: InfoService) {
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
