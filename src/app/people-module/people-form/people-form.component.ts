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
import { PeopleServiceService } from '../services/people-service.service';
import { PeopleI } from '../interfaces/people-i';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css'],
})
export class PeopleFormComponent implements OnInit, OnChanges {
  @Output() personAdded = new EventEmitter<PeopleI>();
  @Input() toEditPerson: PeopleI | undefined;
  @Output() toClearPerson = new EventEmitter<boolean>();
  formTitle: string = 'Agregar Persona';
  formButton: string = 'Agregar Persona';

  peopleForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private peopleService: PeopleServiceService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['toEditPerson']) {
      this.loadForm();
    }
  }

  loadForm() {
    if (this.toEditPerson) {
      console.log(this.toEditPerson);

      this.formTitle = 'Editar Persona';
      this.formButton = 'Editar Persona';
      this.peopleForm = this.fb.group({
        nombrecompleto: [this.toEditPerson.nombrecompleto, Validators.required],
        email: [
          this.toEditPerson.email,
          [Validators.required, Validators.email],
        ],
        telefono: [this.toEditPerson.telefono, Validators.required],
        contrasena: [this.toEditPerson.contrasena, Validators.minLength(6)],
      });
    } else {
      this.formTitle = 'Agregar Persona';
      this.formButton = 'Agregar Persona';
      this.peopleForm = this.fb.group({
        nombrecompleto: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefono: ['', Validators.required],
        contrasena: ['', [Validators.required, Validators.minLength(6)]],
        rol: ['user'],
      });
    }
  }

  onSubmit(): void {
    if (this.peopleForm.valid && this.toEditPerson) {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result && this.toEditPerson?._id) {
          const toEditPerson: PeopleI = this.peopleForm.value;
          this.peopleService
            .updatePerson(this.toEditPerson._id, toEditPerson)
            .subscribe({
              next: (res) => {
                this.successMessage = 'Persona editada satisfactoriamente.';
                this.peopleForm.reset();
                this.toClearPerson.emit(true);
                setTimeout(() => (this.successMessage = ''), 3000);
              },
              error: (err) => {
                this.errorMessage = 'Error al editar, intente más tarde.';
                setTimeout(() => (this.errorMessage = ''), 1000);
              },
            });
        } else {
          this.errorMessage = 'Ninguna persona editada';
          this.peopleForm.reset();
          setTimeout(() => (this.errorMessage = ''), 1000);
        }
      });
    } else {
      const dialogRef = this.dialog.open(ConfirmDialogComponent);
      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          const newPerson: PeopleI = this.peopleForm.value;

          this.peopleService.createPerson(newPerson).subscribe({
            next: (res) => {
              this.successMessage = 'Persona añadida satisfactoriamente.';

              this.personAdded.emit(newPerson);
              this.peopleForm.reset();
              setTimeout(() => (this.successMessage = ''), 3000);
            },
            error: (err) => {
              this.errorMessage = 'Error mientras se añade una persona.';
              setTimeout(() => (this.errorMessage = ''), 1000);
            },
          });
        } else {
          this.errorMessage = 'Ninguna persona añadida';
          this.peopleForm.reset();
          setTimeout(() => (this.errorMessage = ''), 1000);
        }
      });
    }
  }
}
