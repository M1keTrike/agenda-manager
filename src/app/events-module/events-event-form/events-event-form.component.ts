import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventI } from '../event-i';
import { AgendI } from '../../agends-module/agend-i';

@Component({
  selector: 'app-events-event-form',
  templateUrl: './events-event-form.component.html',
  styleUrls: ['./events-event-form.component.css'],
})
export class EventsEventFormComponent implements OnInit {
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
    });
  }

  ngOnInit(): void {
    if (this.event) {
      this.eventForm.patchValue(this.event);
    }
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const updatedEvent: EventI = { ...this.event, ...this.eventForm.value };
      this.saveEvent.emit(updatedEvent);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
