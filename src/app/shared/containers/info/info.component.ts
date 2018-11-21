import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../../services/info.service';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import * as fromThemes from '../../../state/themes/reducers';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements AfterViewInit, OnInit {

  message: String;
  theme: String;

  constructor(
    private router: Router,
    private service: InfoService,
    private store: Store<fromThemes.IState>) { }

  ngOnInit(): void {
    this.message = this.service.message;
    this.store.pipe(select(fromThemes.getTheme)).subscribe(res => this.theme = res);
  }

  observe(): Observable<any> {
    return Observable.create(observer => {
      observer.next(true);
    });
  }

  redirect() {
    this.observe().pipe(delay(3000)).subscribe(() => {
      if (this.router.url === '/info') {
        this.router.navigate(['home']);
      }
    });
  }

  ngAfterViewInit() {
    this.redirect();
  }
}
