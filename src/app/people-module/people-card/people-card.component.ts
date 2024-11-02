import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PeopleI } from '../interfaces/people-i';

@Component({
  selector: 'people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css'],
})
export class PeopleCardComponent {
  @Output() selectedPerson = new EventEmitter<PeopleI>();

  @Input() person: PeopleI = {
    _id: '',
    nombrecompleto: '',
    email: '',
    telefono: '',
    evento_actual: '',
    agenda_id: [],
    createdAt: new Date(0),
    updatedAt: new Date(0),
  };

  clickSelected(): void {
    this.selectedPerson.emit(this.person);
  }

  constructor() {}
}
