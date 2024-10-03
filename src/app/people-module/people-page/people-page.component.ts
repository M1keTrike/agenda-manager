import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PeopleServiceService } from '../people-service.service';
import { PeopleI } from '../people-i';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrl: './people-page.component.css',
})
export class PeoplePageComponent implements OnInit {
  toEditPerson: PeopleI | undefined;
  selectedPerson: PeopleI | undefined;
  peopleForm: any;
  constructor(private peopleService: PeopleServiceService) {}

  people_list: PeopleI[] = [];

  ngOnInit(): void {
    this.loadPeople();
  }

  loadPeople() {
    this.peopleService.getPeople().subscribe((people) => {
      this.people_list = people;
    });
  }

  onPersonAdded(newPerson: PeopleI) {
    this.people_list.push(newPerson);
  }

  onPersonDeleted(personToDelete: PeopleI) {
    if (personToDelete && personToDelete._id) {
      this.peopleService.deletePerson(personToDelete._id).subscribe(
        () => {
          console.log('Person successfully deleted ');
          this.loadPeople();
          this.selectedPerson = undefined;
        },
        (error) => {
          console.error('Error while deleting person:', error);
        }
      );
    } else {
      console.log('Invalid person to delete');
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
