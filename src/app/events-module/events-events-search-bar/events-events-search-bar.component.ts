import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'events-search-bar',
  templateUrl: './events-events-search-bar.component.html',
  styleUrls: ['./events-events-search-bar.component.css']
})
export class EventsEventsSearchBarComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.search.emit(inputElement.value);
    }
  }
}
