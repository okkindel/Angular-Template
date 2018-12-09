import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent, BadRequestComponent, InfoComponent } from './containers';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [
    InfoComponent,
    BadRequestComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LogoComponent, BadRequestComponent, InfoComponent
  ]
})
export class SharedModule { }
