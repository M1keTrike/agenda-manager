import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PeopleI } from '../people-i';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-people-details-card',
  templateUrl: './people-details-card.component.html',
  styleUrl: './people-details-card.component.css',
})
export class PeopleDetailsCardComponent {
  @Input() selectedPerson: PeopleI | undefined;
  @Output() deletePerson = new EventEmitter<PeopleI>();
  @Output() editPerson = new EventEmitter<PeopleI>();

  constructor(private dialog: MatDialog) {}

  toDeletePerson(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deletePerson.emit(this.selectedPerson);
      } else {
        console.log('No se eliminó a ninguna persona');
      }
    });
  }
  toEditPerson(): void {
    this.editPerson.emit(this.selectedPerson);
  }
}
