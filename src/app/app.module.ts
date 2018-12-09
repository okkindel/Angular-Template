import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StateModule } from './state/state.module';
import { MaterialModule } from './material';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth';
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ThemesModule } from './themes';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    AuthModule,
    StateModule,
    ToolbarModule,
    ThemesModule,
    FormsModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
