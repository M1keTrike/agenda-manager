import { Component } from '@angular/core';
import { AgendI } from '../../agends-module/interfaces/agend-i';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { PeopleI } from '../../people-module/interfaces/people-i';
import { AgendDataI } from '../interfaces/agendData-i';

@Component({
  selector: 'events-page',
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css',
})
export class EventsPageComponent {
  agendData: AgendDataI | undefined;
  mainAgend: AgendI | undefined;
  agendOwner: PeopleI | undefined;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.agendData = this.sharedService.getData();

    if (this.agendData) {
      this.mainAgend = this.agendData.agend;
      this.agendOwner = this.agendData.owner;
    }
  }

  returnToAgends() {
    this.router.navigate(['/agends']);

    if (this.agendData) this.sharedService.setData(this.agendData.owner);
  }
}
