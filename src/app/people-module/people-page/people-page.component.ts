import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleServiceService } from '../services/people-service.service';
import { PeopleI } from '../interfaces/people-i';

@Component({
  selector: 'people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css'],
})
export class PeoplePageComponent implements OnInit {
  toEditPerson: PeopleI | undefined;
  selectedPerson: PeopleI | undefined;
  people_list: PeopleI[] = [];

  constructor(
    private peopleService: PeopleServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.getPeople().subscribe((people) => {
      this.people_list = people.filter((person) => person.rol !== 'admin');
    });
  }

  onLogout(): void {
    this.router.navigate(['/login']);
  }

  onPersonAdded(newPerson: PeopleI) {
    this.people_list.push(newPerson);
  }

  onPersonDeleted(personToDelete: PeopleI) {
    if (personToDelete && personToDelete._id) {
      this.peopleService.deletePerson(personToDelete._id).subscribe(
        () => {
          this.loadPeople();
          this.selectedPerson = undefined;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('Invalido');
    }
  }

  onPersonEdited(personToEdit: PeopleI) {
    if (personToEdit) {
      this.toEditPerson = personToEdit;
    }
  }

  onPersonSelected(selectedPerson: PeopleI) {
    this.selectedPerson = selectedPerson;
  }

  onPersonClear(clearPerson: boolean) {
    if (clearPerson) {
      this.toEditPerson = undefined;
      this.selectedPerson = undefined;
      this.loadPeople();
    }
  }
}
