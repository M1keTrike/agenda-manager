import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AgendI } from '../agend-i';
import { ConfirmDialogComponent } from '../../people-module/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-agends-agend-details-card',
  templateUrl: './agends-agend-details-card.component.html',
  styleUrls: ['./agends-agend-details-card.component.css'],
})
export class AgendsAgendDetailsCardComponent {
  @Input() selectedAgend: AgendI | undefined;
  @Output() deleteAgend = new EventEmitter<AgendI>();
  @Output() editAgend = new EventEmitter<AgendI>();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private sharedService: SharedService
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
}
