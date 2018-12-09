import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebar: MatDrawer;

  public setBar(sidebar: MatDrawer) {
    this.sidebar = sidebar;
  }

  public toggle(): void {
    this.sidebar.toggle();
  }

}
