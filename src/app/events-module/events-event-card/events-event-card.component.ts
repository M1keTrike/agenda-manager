import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EventI } from '../interfaces/event-i';

@Component({
  selector: 'events-card',
  templateUrl: './events-event-card.component.html',
  styleUrls: ['./events-event-card.component.css'],
})
export class EventsEventCardComponent {
  @Input() event!: EventI;
  @Output() selectEvent = new EventEmitter<EventI>();

  onSelect() {
    this.selectEvent.emit(this.event);
  }
}
