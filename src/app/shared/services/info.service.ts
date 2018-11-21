import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private router: Router) { }

  message: String = '';

  showInfo(msg: String) {
    this.message = msg;
    this.router.navigate(['info']);
  }
}
