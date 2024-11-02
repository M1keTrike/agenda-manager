import { Component, OnInit } from '@angular/core';
import { PeopleI } from '../../people-module/people-i';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-agends-agends-page',
  templateUrl: './agends-agends-page.component.html',
  styleUrl: './agends-agends-page.component.css',
})
export class AgendsAgendsPageComponent implements OnInit {
  personOwner: PeopleI |  undefined ;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.personOwner = this.sharedService.getData();
    
    
  }
}
