import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsEventsListComponent } from './events-events-list/events-events-list.component';
import { EventsEventsSearchBarComponent } from './events-events-search-bar/events-events-search-bar.component';
import { EventsEventCardComponent } from './events-event-card/events-event-card.component';
import { EventsEventDetailsCardComponent } from './events-event-details-card/events-event-details-card.component';



@NgModule({
  declarations: [
    EventsEventsListComponent,
    EventsEventsSearchBarComponent,
    EventsEventCardComponent,
    EventsEventDetailsCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModuleModule { }
