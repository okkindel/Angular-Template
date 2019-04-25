import * as AuthActions from '../store/actions/';
import * as fromAuth from '../store/reducers/';
import { CanActivate } from '@angular/router';
import { map, first } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromAuth.IState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getIsLoggedIn),
      map(this.handleLoginStatus),
      first()
    );
  }

  private handleLoginStatus = (isLoggedIn: boolean): boolean => {
    if (isLoggedIn) {
      return true;
    }
    setTimeout(() => {
      this.store.dispatch(new AuthActions.LoginRedirect());
    }, 0);
    return false;
  };
}
