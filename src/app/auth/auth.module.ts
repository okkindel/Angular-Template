import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent, RegisterPageComponent } from './containers/';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from '../state/auth/effects/';
import { reducers } from '../state/auth/reducers';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent, RegisterComponent } from './components';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { ThemesModule } from '../themes';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ThemesModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('auth', reducers),
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }]),
  ],
  declarations: [
    LoginComponent,
    LoginPageComponent,
    RegisterPageComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
