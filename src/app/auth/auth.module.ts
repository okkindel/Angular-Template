import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent, RegisterPageComponent } from './containers/';
import { LoginComponent, RegisterComponent } from './components';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects';
import { MaterialModule } from '../material';
import { FormsModule } from '@angular/forms';
import { reducers } from './store/reducers';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { ThemesModule } from '../themes';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: 'login', component: LoginPageComponent }]),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects]),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ThemesModule
  ],
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    RegisterComponent,
    LoginComponent
  ]
})
export class AuthModule {}
