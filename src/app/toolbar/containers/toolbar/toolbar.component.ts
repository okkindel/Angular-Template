import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(
    private router: Router,
    private sidebar: SidebarService) {
  }

  navigateToHome() {
    this.router.navigate(['home']);
  }

  toggleSidenav() {
    this.sidebar.toggle();
  }
}
