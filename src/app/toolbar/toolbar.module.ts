import { UserSettingsComponent, NoUserComponent } from './components';
import { ToolbarComponent, MenuComponent, SidebarComponent } from './containers';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { NgModule } from '@angular/core';
import { ThemesModule } from '../themes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ThemesModule,
    RouterModule
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
