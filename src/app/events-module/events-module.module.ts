import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsEventsListComponent } from './events-events-list/events-events-list.component';
import { EventsEventsSearchBarComponent } from './events-events-search-bar/events-events-search-bar.component';
import { EventsEventCardComponent } from './events-event-card/events-event-card.component';
import { EventsEventDetailsCardComponent } from './events-event-details-card/events-event-details-card.component';
import { EventsEventFormComponent } from './events-event-form/events-event-form.component';



@NgModule({
  declarations: [
    EventsEventsListComponent,
    EventsEventsSearchBarComponent,
    EventsEventCardComponent,
    EventsEventDetailsCardComponent,
    EventsEventFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModuleModule { }
