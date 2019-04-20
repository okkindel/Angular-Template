import { MaterialModule } from './../material/material.module';
import { ThemesComponent } from './components';
import { CommonModule } from '@angular/common';
import { reducer } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    StoreModule.forFeature('themes', reducer),
    MaterialModule,
    CommonModule
  ],
  declarations: [ThemesComponent],
  exports: [ThemesComponent]
})
export class ThemesModule {}
