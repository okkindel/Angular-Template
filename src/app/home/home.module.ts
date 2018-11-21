import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './containers';
import { ThemesModule } from '../themes';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MaterialModule,
    ThemesModule
  ],
  declarations: [
    HomeComponent,
  ]
})
export class HomeModule { }
