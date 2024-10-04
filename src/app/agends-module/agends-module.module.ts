import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendsDashboardComponent } from './agends-dashboard/agends-dashboard.component';
import { AgendsSearchBarComponent } from './agends-search-bar/agends-search-bar.component';
import { AgendsAgendCardComponent } from './agends-agend-card/agends-agend-card.component';
import { AgendsAgendDetailsCardComponent } from './agends-agend-details-card/agends-agend-details-card.component';
import { AgendsAgendRemainderComponent } from './agends-agend-remainder/agends-agend-remainder.component';
import { AgendsAgendFormComponent } from './agends-agend-form/agends-agend-form.component';
import { AgendsAgendsPageComponent } from './agends-agends-page/agends-agends-page.component';
import { AgendsModuleRoutingModule } from './agends-module-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AgendsDashboardComponent,
    AgendsSearchBarComponent,
    AgendsAgendCardComponent,
    AgendsAgendDetailsCardComponent,
    AgendsAgendRemainderComponent,
    AgendsAgendFormComponent,
    AgendsAgendsPageComponent,
  ],
  imports: [CommonModule, AgendsModuleRoutingModule, ReactiveFormsModule],
})
export class AgendsModuleModule {}
