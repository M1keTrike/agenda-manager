import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeopleI } from './people-i';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class PeopleServiceService {
  private apiUrl = `${environment.apiUrl}/personas`;

  constructor(private http: HttpClient) {}

  createPerson(persona: PeopleI): Observable<PeopleI> {
    return this.http.post<PeopleI>(this.apiUrl, persona);
  }

  getPeople(): Observable<PeopleI[]> {
    return this.http.get<PeopleI[]>(this.apiUrl);
  }

  getPeopleById(id: string): Observable<PeopleI> {
    return this.http.get<PeopleI>(`${this.apiUrl}/${id}`);
  }

  updatePerson(id: string, persona: PeopleI): Observable<PeopleI> {
    return this.http.put<PeopleI>(`${this.apiUrl}/${id}`, persona);
  }

  deletePerson(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
