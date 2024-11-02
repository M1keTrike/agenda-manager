import { Component, Input } from '@angular/core';
import { PeopleI } from '../interfaces/people-i';

@Component({
  selector: 'people-dashboard',
  templateUrl: './people-dashboard.component.html',
  styleUrl: './people-dashboard.component.css',
})
export class PeopleDashboardComponent {
  @Input() people_list: PeopleI[] = [];
}
