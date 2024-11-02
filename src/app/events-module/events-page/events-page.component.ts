import { Component } from '@angular/core';
import { AgendI } from '../../agends-module/agend-i';
import { SharedService } from '../../services/shared.service';
import { Router } from '@angular/router';
import { PeopleI } from '../../people-module/people-i';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css',
})
export class EventsPageComponent {
  agendData: any;
  mainAgend: AgendI | undefined;
  AgendOwner: PeopleI | undefined;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.agendData = this.sharedService.getData();
    this.mainAgend = this.agendData.agend;
  }

  returnToAgends() {
    this.router.navigate(['/agends']);
    this.sharedService.setData(this.agendData.owner);
  }
}
