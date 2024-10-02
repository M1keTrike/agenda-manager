import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendsDashboardComponent } from './agends-dashboard/agends-dashboard.component';
import { AgendsSearchBarComponent } from './agends-search-bar/agends-search-bar.component';
import { AgendsAgendCardComponent } from './agends-agend-card/agends-agend-card.component';
import { AgendsAgendDetailsCardComponent } from './agends-agend-details-card/agends-agend-details-card.component';
import { AgendsAgendRemainderComponent } from './agends-agend-remainder/agends-agend-remainder.component';



@NgModule({
  declarations: [
    AgendsDashboardComponent,
    AgendsSearchBarComponent,
    AgendsAgendCardComponent,
    AgendsAgendDetailsCardComponent,
    AgendsAgendRemainderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgendsModuleModule { }
