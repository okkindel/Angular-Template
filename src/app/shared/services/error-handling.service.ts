import { SnackbarService } from './snakbar.service';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import * as fromErrorState from '../store/reducers';
import { HttpErrorAction } from '../store/actions';
import { Observable, throwError } from 'rxjs';
import { switchcase } from '../utils/utils';
import { Injectable } from '@angular/core';
import { IErrorResponse } from '../models';
import autobind from 'autobind-decorator';
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

  mapErrors(error): IErrorResponse {
    return {
      name: error.name,
      status: error.status,
      message: error.message,
      userInfo: this.mapErrorMessage(error.status)
    };
  }

  mapErrorMessage(message): string {
    return switchcase({
      400: 'ERROR.ERR_400',
      401: 'ERROR.ERR_401',
      403: 'ERROR.ERR_403',
      404: 'ERROR.ERR_404',
      409: 'ERROR.ERR_409',
      500: 'ERROR.ERR_500',
      502: 'ERROR.ERR_502'
    })('ERROR.ERR_DEFAULT')(message);
  }

  @autobind
  showMessage(message) {
    this.snackBar.showMessage(message);
  }
}
