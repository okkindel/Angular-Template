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
  exports: [...components]
})
export class SharedModule {}
