import { UserSettingsComponent, NoUserComponent } from './components';
import { ToolbarComponent, MenuComponent } from './containers';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { NgModule } from '@angular/core';
import { ThemesModule } from '../themes';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ThemesModule
  ],
  declarations: [
    ToolbarComponent,
    UserSettingsComponent,
    NoUserComponent,
    MenuComponent,
  ],
  exports: [
    ToolbarComponent,
  ]
})
export class ToolbarModule { }
