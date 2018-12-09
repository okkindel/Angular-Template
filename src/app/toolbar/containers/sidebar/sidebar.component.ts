import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../state/app/app.interface';
import * as fromAuth from '../../../state/auth/reducers/';
import * as AuthActions from '../../../state/auth/actions/';
import { InfoService } from 'src/app/shared/services';
import { SidebarService } from '../../services';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidenav') public sidebar: MatDrawer;
  @HostListener('window:resize', ['$event'])
  onResize() { if (window.innerWidth > 760) { this.close(); } }
  email: any;

  constructor(
    private service: SidebarService,
    private store: Store<AppState>,
    private infoService: InfoService) {
    this.store.pipe(select(fromAuth.getEmail)).subscribe(res => this.email = res);
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
