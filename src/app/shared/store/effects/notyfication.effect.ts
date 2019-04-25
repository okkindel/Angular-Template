import { Actions, Effect, ofType } from '@ngrx/effects';
import { delay, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  NotyficationActionTypes,
  NotyficationCloseAction,
  NotyficationOpenAction
} from '../actions';

@Injectable()
export class NotyficationsEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect()
  openNotyfication$ = this.actions$.pipe(
    ofType<NotyficationOpenAction>(NotyficationActionTypes.NOTYFICATION_OPEN),
    tap(() => {
      this.router.navigate(['notyfication']);
    }),
    delay(3000),
    map(() => new NotyficationCloseAction())
  );

  @Effect({ dispatch: false })
  closeNotyfication$ = this.actions$.pipe(
    ofType(NotyficationActionTypes.NOTYFICATION_CLOSE),
    tap(() => {
      if (this.router.url === '/notyfication') {
        this.router.navigate(['home']);
      }
    })
  );
}
