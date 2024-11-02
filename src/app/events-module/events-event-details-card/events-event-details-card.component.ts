import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventI } from '../interfaces/event-i';

@Component({
  selector: 'events-details-card',
  templateUrl: './events-event-details-card.component.html',
  styleUrls: ['./events-event-details-card.component.css'],
})
export class EventsEventDetailsCardComponent {
  @Input() selectedEvent: EventI | undefined;
  @Output() editEvent = new EventEmitter<EventI>();
  @Output() deleteEvent = new EventEmitter<EventI>();

  onEdit() {
    if (this.selectedEvent) {
      this.editEvent.emit(this.selectedEvent);
    }
  }

  onDelete() {
    if (this.selectedEvent) {
      this.deleteEvent.emit(this.selectedEvent);
    }
  }
}
