import { UserSettingsComponent, NoUserComponent } from './components';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { ThemesModule } from '../themes';
import { NgModule } from '@angular/core';
import {
  ToolbarComponent,
  SidebarComponent,
  MenuComponent
} from './containers';

const components = [
  UserSettingsComponent,
  SidebarComponent,
  ToolbarComponent,
  NoUserComponent,
  MenuComponent
];

@NgModule({
  imports: [CommonModule, MaterialModule, ThemesModule, RouterModule],
  declarations: [...components],
  exports: [ToolbarComponent, SidebarComponent]
})
export class ToolbarModule {}
