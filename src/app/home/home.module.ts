import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './containers';
import { NgModule } from '@angular/core';
import { ThemesModule } from '../themes';

@NgModule({
  imports: [
    MaterialModule,
    BrowserModule,
    ThemesModule,
    RouterModule,
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
