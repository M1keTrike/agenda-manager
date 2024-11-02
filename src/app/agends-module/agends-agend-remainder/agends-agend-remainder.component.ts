import { Component, Input, OnInit } from '@angular/core';
import { EventI } from '../../events-module/interfaces/event-i';
import { PeopleI } from '../../people-module/interfaces/people-i';
import { AgendService } from '../services/agend-service.service';

@Component({
  selector: 'agends-remainder',
  templateUrl: './agends-agend-remainder.component.html',
  styleUrls: ['./agends-agend-remainder.component.css'],
})
export class AgendsAgendRemainderComponent implements OnInit {
  @Input() owner: PeopleI | undefined;
  upcomingEvents: EventI[] = [];

  constructor(private agendService: AgendService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    if (this.owner?._id) {
      this.agendService.getEventosByOwnerId(this.owner._id).subscribe((events) => {
        this.filterUpcomingEvents(events);
      });
    }
  }

  filterUpcomingEvents(events: EventI[]): void {
    const today = new Date();
    this.upcomingEvents = events.filter((event) => {
      const eventDate = new Date(event.fecha_inicio);
      return (
        eventDate > today &&
        eventDate.getTime() - today.getTime() <= 7 * 24 * 60 * 60 * 1000
      );
    });
  }
}
