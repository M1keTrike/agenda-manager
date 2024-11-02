import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeopleI } from '../../people-module/people-i';
import { AgendI } from '../agend-i';
import { AgendService } from '../agend-service.service';

@Component({
  selector: 'app-agends-agend-form',
  templateUrl: './agends-agend-form.component.html',
  styleUrls: ['./agends-agend-form.component.css'],
})
export class AgendsAgendFormComponent implements OnInit, OnChanges {
  @Input() toEditAgend: AgendI | undefined;
  @Input() personOwner: PeopleI | undefined;
  @Output() agendAdded = new EventEmitter<AgendI>();
  @Output() editedAgend = new EventEmitter<boolean>();
  agendaForm!: FormGroup;
  titleAgendForm: string = 'Agregar agenda';

  constructor(private fb: FormBuilder, private agendService: AgendService) {}

  ngOnInit(): void {
    this.loadForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toEditAgend']) {
      this.loadForm();
    }
  }

  loadForm(): void {
    if (this.toEditAgend) {
      this.titleAgendForm = 'Editar agenda';
      this.agendaForm = this.fb.group({
        nombre: [this.toEditAgend.nombre, Validators.required],
        tipo_agenda: [this.toEditAgend.tipo_agenda, Validators.required],
      });
    } else {
      this.agendaForm = this.fb.group({
        nombre: ['', Validators.required],
        tipo_agenda: ['', Validators.required],
      });
    }
  }

  onSubmit() {
    if (this.toEditAgend && this.toEditAgend._id) {
      const editAgend: AgendI = {
        ...this.agendaForm.value,
      };
      this.agendService
        .updateAgend(this.toEditAgend._id, editAgend)
        .subscribe(() => {
          this.agendaForm.reset();
          this.titleAgendForm = 'Agregar agenda';
          this.editedAgend.emit(true);
        });
    } else if (this.agendaForm.valid && this.personOwner) {
      const newAgend: AgendI = {
        ...this.agendaForm.value,
        persona_id: this.personOwner._id,
      };
      this.agendService.createAgend(newAgend).subscribe((agend: AgendI) => {
        this.agendAdded.emit(agend);
        this.agendaForm.reset();
      });
    }
  }
}
