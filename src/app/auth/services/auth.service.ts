import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_URL = environment.api_url;

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<any> {
    const body = { email: email, password: password };
    const url = `${this.BASE_URL}/login`;
    return this.http.post<IUser>(url, body);
  }
}
