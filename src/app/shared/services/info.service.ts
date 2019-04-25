import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private router: Router) {}

  message = '';

  showInfo(message: string) {
    this.message = message;
    this.router.navigate(['info']);
  }
}
