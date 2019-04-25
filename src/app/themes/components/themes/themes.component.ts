import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../../services/themes.service';
import { Themes } from '../../models/themes.enum';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
  constructor(private themesService: ThemesService) {}

  themes = (): Array<string> => Object.keys(Themes);

  changeTheme(theme) {
    this.themesService.changeTheme(Themes[theme]);
  }
}
