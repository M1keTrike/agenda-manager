import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PeopleI } from '../people-i';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-people-details-card',
  templateUrl: './people-details-card.component.html',
  styleUrl: './people-details-card.component.css',
})
export class PeopleDetailsCardComponent {
  @Input() selectedPerson: PeopleI | undefined;
  @Output() deletePerson = new EventEmitter<PeopleI>();
  @Output() editPerson = new EventEmitter<PeopleI>();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private sharedService: SharedService
  ) {}

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

  navigateToAgends(): void {
    this.sharedService.setData(this.selectedPerson);
    this.router.navigate(['/agends']);
  }
}
