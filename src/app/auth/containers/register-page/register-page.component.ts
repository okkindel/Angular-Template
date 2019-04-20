import { SnackbarService } from '../../../shared/services';
import { InfoService } from '../../../shared/services/';
import { RegisterService } from '../../services';
import { ICredentials } from '../../models';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  isPending$: Observable<boolean>;

  constructor(
    private service: RegisterService,
    private snackBar: SnackbarService,
    private infoSevice: InfoService
  ) {}

  register(credentials: ICredentials) {
    this.isPending$ = of(true);
    this.service.register(credentials.email, credentials.password).subscribe(
      () => {
        this.infoSevice.showInfo('You were successfully registered.');
      },
      error => {
        this.snackBar.showMessage(error.error.status || 'No server connection');
        this.isPending$ = of(false);
      }
    );
  }
}
