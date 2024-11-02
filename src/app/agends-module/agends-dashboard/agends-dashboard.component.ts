import { Component, Input, OnInit } from '@angular/core';
import { PeopleI } from '../../people-module/interfaces/people-i';
import { AgendI } from '../interfaces/agend-i';
import { AgendService } from '../services/agend-service.service';

@Component({
  selector: 'agends-dashboard',
  templateUrl: './agends-dashboard.component.html',
  styleUrls: ['./agends-dashboard.component.css'],
})
export class AgendsDashboardComponent implements OnInit {
  @Input() personOwner: PeopleI | undefined;
  agends_list: AgendI[] = [];
  isLoading = false;
  errorMessage: string | null = null;
  selectedAgend: AgendI | undefined;
  toEditAgend: AgendI | undefined;

  constructor(private agendService: AgendService) {}

  ngOnInit(): void {
    if (this.personOwner) {
      this.loadAgendas();
    }
  }

  loadAgendas() {
    if (this.personOwner && this.personOwner._id) {
      this.isLoading = true;
      this.agendService.getAgendsByPersonaId(this.personOwner._id).subscribe(
        (agendas: AgendI[]) => {
          this.agends_list = agendas;
          this.isLoading = false;
          this.errorMessage = null;
        },
        (error) => {
          this.isLoading = false;
          this.errorMessage =
            'Error al cargar las agendas. Por favor, inténtelo de nuevo.';
          console.error('Error al cargar las agendas:', error);
        }
      );
    }
  }

  onAgendAdded(newAgend: AgendI) {
    this.agends_list.push(newAgend);
  }

  onAgendDeleted(agendToDelete: AgendI) {
    if (agendToDelete && agendToDelete._id) {
      this.agendService.deleteAgend(agendToDelete._id).subscribe(
        () => {
          this.loadAgendas();
          this.selectedAgend = undefined;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('Invalid agenda to delete');
    }
  }

  onAgendEdited(agendToEdit: AgendI) {
    if (agendToEdit) {
      this.toEditAgend = agendToEdit;
    }
  }

  onAgendEditedSuccess(edited: boolean) {
    if (edited) {
      this.loadAgendas();
      this.selectedAgend = undefined;
      this.toEditAgend = undefined;
    }
  }

  selectAgend(agend: AgendI) {
    this.selectedAgend = agend;
  }
}
