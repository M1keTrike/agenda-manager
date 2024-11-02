import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AgendI } from '../interfaces/agend-i';
import { ConfirmDialogComponent } from '../../people-module/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { PeopleI } from '../../people-module/interfaces/people-i';
import { AgendDataI } from '../../events-module/interfaces/agendData-i';

@Component({
  selector: 'agends-details-card',
  templateUrl: './agends-agend-details-card.component.html',
  styleUrls: ['./agends-agend-details-card.component.css'],
})
export class AgendsAgendDetailsCardComponent {
  @Input() agendOwner: PeopleI | undefined;
  @Input() selectedAgend: AgendI | undefined;
  @Output() deleteAgend = new EventEmitter<AgendI>();
  @Output() editAgend = new EventEmitter<AgendI>();

  constructor(
    private dialog: MatDialog,
    private sharedService: SharedService,
    private router: Router
  ) {}

  toDeleteAgend(): void {
    if (!this.selectedAgend) {
      console.error('No hay agenda seleccionada para eliminar');
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteAgend.emit(this.selectedAgend);
      } else {
        console.log('No se eliminó ninguna agenda');
      }
    });
  }

  toEditAgend(): void {
    if (!this.selectedAgend) {
      console.error('No hay agenda seleccionada para editar');
      return;
    }
    this.editAgend.emit(this.selectedAgend);
  }

  navigateToEvents(): void {
    if (this.selectedAgend && this.agendOwner) {
      const toEventsPageData: AgendDataI = {
        agend: this.selectedAgend,
        owner: this.agendOwner,
      };
      this.sharedService.setData(toEventsPageData);
      this.router.navigate(['/events']);
    }
  }
}
