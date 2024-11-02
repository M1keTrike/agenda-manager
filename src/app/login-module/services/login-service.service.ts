import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginI } from '../interfaces/login-i';
import { environment } from '../../../enviroments/enviroment';
import { PeopleI } from '../../people-module/interfaces/people-i';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  private apiUrl = `${environment.apiUrl}/auth/login`;

  constructor(private http: HttpClient) {}

  login(credentials: {
    email: string;
    contrasena: string;
  }): Observable<LoginI> {
    return this.http.post<LoginI>(this.apiUrl, credentials);
  }

  getPeopleAuthenticated(userId: string): Observable<PeopleI> {
    return this.http.get<PeopleI>(`${environment.apiUrl}/personas/${userId}`);
  }
}
