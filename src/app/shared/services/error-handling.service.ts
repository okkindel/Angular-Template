import * as fromErrorState from '../store/reducers/notyfication.reducer';
import { HttpErrorAction } from '../store/actions/notyfication.action';
import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
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
}
