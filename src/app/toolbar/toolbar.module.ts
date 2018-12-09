import { UserSettingsComponent, NoUserComponent } from './components';
import { ToolbarComponent, MenuComponent, SidebarComponent } from './containers';
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
    SidebarComponent,
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent
  ]
})
export class ToolbarModule { }
