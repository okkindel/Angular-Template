import { SnackbarService } from './snakbar.service';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import * as fromErrorState from '../store/reducers';
import { HttpErrorAction } from '../store/actions';
import { MatSnackBar } from '@angular/material';
import { Observable, throwError } from 'rxjs';
import { switchcase } from '../utils/utils';
import { Injectable } from '@angular/core';
import { IErrorResponse } from '../models';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  constructor(
    private storeError: Store<fromErrorState.IErrorState>,
    private snackBar: SnackbarService
  ) {}

  handleError(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    try {
      const errToDispatch = this.mapErrors(error);
      this.storeError.dispatch(new HttpErrorAction(errToDispatch));
      return throwError(error);
    } catch (unhadledErr) {
      return throwError(unhadledErr);
    }
  }

  mapErrors = (error): IErrorResponse => ({
    name: error.name,
    status: error.status,
    message: error.message,
    translationKey: this.mapErrorMessage(error.status)
  });

  mapErrorMessage = message =>
    switchcase({
      400: 'ERROR.ERR_400',
      401: 'ERROR.ERR_401',
      403: 'ERROR.ERR_403',
      404: 'ERROR.ERR_404',
      409: 'ERROR.ERR_409',
      500: 'ERROR.ERR_500',
      502: 'ERROR.ERR_502'
    })('ERROR.ERR_DEFAULT')(message);

  showMessage(message) {
    // this.snackBar.open(message, null, { duration: 4000 });
    this.snackBar.showMessage(message);
  }
}
