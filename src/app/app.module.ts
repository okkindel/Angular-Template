import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from './toolbar/toolbar.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { StateModule } from './state/state.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { NgModule } from '@angular/core';
import { ThemesModule } from './themes';
import { AuthModule } from './auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    MaterialModule,
    ToolbarModule,
    BrowserModule,
    SharedModule,
    ThemesModule,
    StateModule,
    FormsModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
