import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICredentials } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private BASE_URL = environment.api_url;

  constructor(private http: HttpClient) { }


  register(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/register`;
    const body = { 'email': email, 'password': password };
    return this.http.post<ICredentials>(url, body);
  }
}
