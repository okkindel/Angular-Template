import { Component, AfterViewInit, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements AfterViewInit, OnInit {
  message: String;

  constructor(private router: Router, private service: InfoService) {}

  ngOnInit(): void {
    this.message = this.service.message;
  }

  observe(): Observable<any> {
    return new Observable(observer => {
      observer.next(true);
    });
  }

  redirect() {
    this.observe()
      .pipe(delay(3000))
      .subscribe(() => {
        if (this.router.url === '/info') {
          this.router.navigate(['home']);
        }
      });
  }

  ngAfterViewInit() {
    this.redirect();
  }
}
