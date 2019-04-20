import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import * as AuthActions from '../../../auth/store/actions';
import { AppState } from '../../../state/app.interface';
import * as fromAuth from '../../../auth/store/reducers';
import { InfoService } from '../../../shared/services';
import { SidebarService } from '../../services';
import { MatDrawer } from '@angular/material';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  email: any;

  @ViewChild('sidenav') public sidebar: MatDrawer;
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 760) {
      this.close();
    }
  }

  constructor(
    private service: SidebarService,
    private store: Store<AppState>,
    private infoService: InfoService
  ) {
    this.store
      .pipe(select(fromAuth.getEmail))
      .subscribe(res => (this.email = res));
  }

  public logout() {
    this.store.dispatch(new AuthActions.Logout());
    this.infoService.showInfo('You were successfully logged out.');
  }

  close() {
    this.sidebar.opened = false;
  }

  ngOnInit(): void {
    this.service.setBar(this.sidebar);
  }
}
