import { HttpErrorInterceptor } from './utils/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { NgModule } from '@angular/core';
import {
  BadRequestComponent,
  LogoComponent,
  InfoComponent
} from './components';

const components = [InfoComponent, BadRequestComponent, LogoComponent];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [...components],
  exports: [...components],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]
})
export class SharedModule {}
