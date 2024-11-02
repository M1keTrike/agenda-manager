import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventI } from '../interfaces/event-i';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = `${environment.apiUrl}/eventos`;

  constructor(private http: HttpClient) {}

  createEvent(evento: EventI): Observable<EventI> {
    return this.http.post<EventI>(this.apiUrl, evento);
  }

  getEvents(): Observable<EventI[]> {
    return this.http.get<EventI[]>(this.apiUrl);
  }

  getEventById(id: string): Observable<EventI> {
    return this.http.get<EventI>(`${this.apiUrl}/${id}`);
  }

  updateEvent(id: string, evento: EventI): Observable<EventI> {
    console.log(`${this.apiUrl}/${id}`);
    return this.http.put<EventI>(`${this.apiUrl}/${id}`, evento);
  }

  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getEventsByAgenda(id_agenda: string): Observable<EventI[]> {
    return this.http.get<EventI[]>(`${this.apiUrl}/agenda/${id_agenda}`);
  }
}
