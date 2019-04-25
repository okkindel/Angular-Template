import * as fromNotyficatons from '../../../shared/store/reducers';
import { NotyficationOpenAction } from 'src/app/shared/store/actions';
import { SnackbarService } from '../../../shared/services';
import { RegisterService } from '../../services';
import { ICredentials } from '../../models';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  isPending$: Observable<boolean>;

  constructor(
    private store: Store<fromNotyficatons.ISnackBarState>,
    private snackBar: SnackbarService,
    private service: RegisterService
  ) {}

  register(credentials: ICredentials) {
    this.isPending$ = of(true);
    this.service.register(credentials.email, credentials.password).subscribe(
      () => {
        this.store.dispatch(
          new NotyficationOpenAction({
            message: 'You were successfully registered.'
          })
        );
      },
      error => {
        this.snackBar.showMessage(error.error.status || 'No server connection');
        this.isPending$ = of(false);
      }
    );
  }
}
