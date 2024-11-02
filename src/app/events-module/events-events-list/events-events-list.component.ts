import { Component, Input, OnInit } from '@angular/core';
import { AgendI } from '../../agends-module/agend-i';
import { EventI } from '../event-i';
import { EventService } from '../event-service.service';

@Component({
  selector: 'app-events-events-list',
  templateUrl: './events-events-list.component.html',
  styleUrls: ['./events-events-list.component.css'],
})
export class EventsEventsListComponent implements OnInit {
  @Input() mainAgend: AgendI | undefined;
  eventsList: EventI[] = [];
  selectedEvent: EventI | null = null;

  constructor(private eventsService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    if (this.mainAgend?._id) {
      this.eventsService.getEventsByAgenda(this.mainAgend._id).subscribe(
        (events: EventI[]) => (this.eventsList = events),
        (error) => console.error('Error al cargar los eventos:', error)
      );
    }
  }

  onSelectEvent(event: EventI) {
    this.selectedEvent = event;
  }

  onDeleteEvent(event: EventI) {
    if (event._id) {
      this.eventsService.deleteEvent(event._id).subscribe(() => {
        this.loadEvents();
        this.resetFormState();
      });
    }
  }

  onEditEvent(event: EventI) {
    this.selectedEvent = event;
  }

  onAddEvent() {
    this.selectedEvent = null; 
  }

  onSaveEvent(event: EventI) {
    if (event._id) {
      this.eventsService.updateEvent(event._id, event).subscribe(() => {
        this.loadEvents();
        this.resetFormState();
      });
    } else {
      this.createEvent(event);
    }
  }

  createEvent(event: EventI) {
    if (this.mainAgend?._id) {
      const newEvent: EventI = { ...event, id_agenda: this.mainAgend._id };
      this.eventsService.createEvent(newEvent).subscribe(() => {
        this.loadEvents();
        this.resetFormState();
      });
    }
  }

  onCancelForm() {
    this.resetFormState();
  }

  private resetFormState() {
    this.selectedEvent = null;
  }
}
