import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AgendI } from './agend-i';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class AgendService {
  private apiUrl = `${environment.apiUrl}/agendas`;

  constructor(private http: HttpClient) {}

  createAgend(agenda: AgendI): Observable<AgendI> {
    return this.http.post<AgendI>(this.apiUrl, agenda);
  }

  getAgends(): Observable<AgendI[]> {
    return this.http.get<AgendI[]>(this.apiUrl);
  }

  getAgendById(id: string): Observable<AgendI> {
    return this.http.get<AgendI>(`${this.apiUrl}/${id}`);
  }

  updateAgend(id: string, agenda: AgendI): Observable<AgendI> {
    return this.http.put<AgendI>(`${this.apiUrl}/${id}`, agenda);
  }

  deleteAgend(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAgendsByPersonaId(personaId: string): Observable<AgendI[]> {
    return this.http.get<AgendI[]>(`${this.apiUrl}/persona/${personaId}`);
  }
}
