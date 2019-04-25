import { ErrorHandlingEffects, NotyficationsEffects } from './store/effects';
import { errorHandlingReducer, notyficationReducer } from './store/reducers';
import { HttpErrorInterceptor } from './utils/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '../material';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import {
  BadRequestComponent,
  LogoComponent,
  NotyficationComponent
} from './components';

const components = [NotyficationComponent, BadRequestComponent, LogoComponent];

@NgModule({
  imports: [
    StoreModule.forFeature('notyfication-state', notyficationReducer),
    StoreModule.forFeature('error-state', errorHandlingReducer),
    EffectsModule.forFeature([ErrorHandlingEffects, NotyficationsEffects]),
    MaterialModule,
    CommonModule,
    RouterModule
  ],
  declarations: [...components],
  exports: [...components],
  providers: [
    {
      useClass: HttpErrorInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true
    }
  ]
})
export class SharedModule {}
