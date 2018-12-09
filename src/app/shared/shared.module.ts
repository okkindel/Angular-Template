import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent, BadRequestComponent, InfoComponent } from './components';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    InfoComponent,
    BadRequestComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    LogoComponent, BadRequestComponent, InfoComponent
  ]
})
export class SharedModule { }
