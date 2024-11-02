import { Component, OnInit } from '@angular/core';
import { PeopleI } from '../../people-module/interfaces/people-i';

import { SharedService } from '../../services/shared.service';

import { Router } from '@angular/router';

@Component({
  selector: 'agends-page',
  templateUrl: './agends-agends-page.component.html',
  styleUrls: ['./agends-agends-page.component.css'],
})
export class AgendsAgendsPageComponent implements OnInit {
  personOwner: PeopleI | undefined;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.personOwner = this.sharedService.getData();
  }

  onLogout(): void {
    this.sharedService.setData(undefined);
    this.router.navigate(['/login']);
  }
}
