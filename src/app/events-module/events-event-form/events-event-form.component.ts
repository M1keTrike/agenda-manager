import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventI } from '../interfaces/event-i';
import { AgendI } from '../../agends-module/interfaces/agend-i';
import { PeopleI } from '../../people-module/interfaces/people-i';

@Component({
  selector: 'events-form',
  templateUrl: './events-event-form.component.html',
  styleUrls: ['./events-event-form.component.css'],
})
export class EventsEventFormComponent implements OnInit {
  @Input() agendOwner: PeopleI | undefined;
  @Input() mainAgend: AgendI | undefined;
  @Input() event: EventI | null = null;
  @Output() saveEvent = new EventEmitter<EventI>();
  @Output() cancel = new EventEmitter<void>();

  eventForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: [''],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required],
      hora_inicio: [''],
      hora_fin: [''],
      ubicacion: [''],
      tipo_evento: ['', Validators.required],
      estado: ['', Validators.required],
      id_agenda: [null],
      owner: [null],
    });
  }

  ngOnInit(): void {
    if (this.event) {
      this.eventForm.patchValue(this.event);
    }

    if (this.agendOwner) {
      this.eventForm.patchValue({ owner: this.agendOwner._id });
    }

    if (this.mainAgend) {
      this.eventForm.patchValue({ id_agenda: this.mainAgend._id }); // Asigna el ID de la agenda
    }
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const updatedEvent: EventI = { ...this.event, ...this.eventForm.value };
      console.log('Evento a guardar:', updatedEvent);
      this.saveEvent.emit(updatedEvent);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
