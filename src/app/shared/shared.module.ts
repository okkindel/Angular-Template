import { HttpErrorInterceptor } from './utils/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationsEffects } from './store/effects';
import { reducer } from '../themes/store/reducers';
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
    EffectsModule.forFeature([NotificationsEffects]),
    StoreModule.forFeature('error-state', reducer),
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
