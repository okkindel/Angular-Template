import { HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { mapErrorMessage } from '../config/error.config';
import * as fromErrorState from '../store/reducers';
import { HttpErrorAction } from '../store/actions';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { IErrorResponse } from '../models';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  constructor(private storeError: Store<fromErrorState.IErrorState>) {}

  handleError(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    this.storeError.dispatch(new HttpErrorAction(this.mapErrors(error)));
    return throwError(error);
  }

  mapErrors(error): IErrorResponse {
    return {
      name: error.name,
      status: error.status,
      message: error.message,
      userInfo: mapErrorMessage(error.status)
    };
  }
}
