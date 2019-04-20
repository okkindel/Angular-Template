import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  message: String = '';
  private BASE_URL = environment.api_url;

  constructor(private http: HttpClient) {}

  resetPassword(email: string, password: string) {
    const url = `${this.BASE_URL}/reset`;
    const body = { email: email, password: password };
    return this.http.post(url, body);
  }
}
