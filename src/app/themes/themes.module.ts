import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../state/themes/reducers';
import {
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatTooltipModule,
  MatToolbarModule
} from '@angular/material';
import { ThemedDirective } from './directives';
import { ThemesComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('themes', reducer),
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [ThemesComponent, ThemedDirective],
  exports: [ThemesComponent, ThemedDirective]
})
export class ThemesModule { }
