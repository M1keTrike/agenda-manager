import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AgendI } from '../agend-i';

@Component({
  selector: 'app-agends-agend-card',
  templateUrl: './agends-agend-card.component.html',
  styleUrls: ['./agends-agend-card.component.css'],
})
export class AgendsAgendCardComponent {
  @Input() agenda: AgendI | undefined;
  @Output() select = new EventEmitter<AgendI>();

  selectAgend() {
    if (this.agenda) {
      this.select.emit(this.agenda);
    }
  }
}
