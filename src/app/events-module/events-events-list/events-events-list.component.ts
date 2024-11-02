import { Component, Input, OnInit } from '@angular/core';
import { AgendI } from '../../agends-module/interfaces/agend-i';
import { EventI } from '../interfaces/event-i';
import { EventService } from '../services/event-service.service';
import { PeopleI } from '../../people-module/interfaces/people-i';

@Component({
  selector: 'events-list',
  templateUrl: './events-events-list.component.html',
  styleUrls: ['./events-events-list.component.css'],
})
export class EventsEventsListComponent implements OnInit {
  @Input() mainAgend: AgendI | undefined;
  @Input() agendOwner: PeopleI | undefined;
  eventsList: EventI[] = [];
  filteredEventsList: EventI[] = [];
  selectedEvent: EventI | null = null;
  showForm: boolean = false;

  constructor(private eventsService: EventService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    if (this.mainAgend?._id) {
      this.eventsService.getEventsByAgenda(this.mainAgend._id).subscribe(
        (events: EventI[]) => {
          this.eventsList = events;
          this.filteredEventsList = events;
        },
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
    this.showForm = true;
  }

  onAddEvent() {
    this.selectedEvent = null;
    this.showForm = true;
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

  onSearch(term: string) {
    this.filteredEventsList = this.eventsList.filter((event) =>
      event.titulo.toLowerCase().includes(term.toLowerCase())
    );
  }

  private resetFormState() {
    this.selectedEvent = null;
    this.showForm = false;
  }
}
