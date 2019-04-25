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
    tap(console.log),
    ofType<NotyficationOpenAction>(NotyficationActionTypes.NOTYFICATION_OPEN),
    tap(action => {
      console.log(action);
      this.router.navigate(['notyfication']);
    }),
    // map((action: SnackbarOpenAction) => action.payload),
    // tap(payload =>
    //   this.matSnackBar.open(payload.message, payload.action, payload.config)
    // ),
    delay(3000),
    map(() => new NotyficationCloseAction())
  );

  @Effect({ dispatch: false })
  closeNotyfication$ = this.actions$.pipe(
    ofType(NotyficationActionTypes.NOTYFICATION_CLOSE),
    tap(() => this.router.navigate(['home']))
  );
}
