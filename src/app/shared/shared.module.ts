import { NotificationsEffects, SnackbarEffects } from './store/effects';
import { errorReducer, snackBarReducer } from './store/reducers';
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
  InfoComponent
} from './components';

const components = [InfoComponent, BadRequestComponent, LogoComponent];

@NgModule({
  imports: [
    StoreModule.forFeature('snackbar-state', snackBarReducer),
    StoreModule.forFeature('error-state', errorReducer),
    EffectsModule.forFeature([NotificationsEffects]),
    EffectsModule.forRoot([SnackbarEffects]),
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
