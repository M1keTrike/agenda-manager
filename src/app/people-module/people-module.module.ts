import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { PeopleDetailsCardComponent } from './people-details-card/people-details-card.component';
import { PeopleSearchBarComponent } from './people-search-bar/people-search-bar.component';
import { PeopleModuleRoutingModule } from './people-module-routing.module';
import { PeoplePageComponent } from './people-page/people-page.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PeopleDashboardComponent,
    PeopleFormComponent,
    PeopleCardComponent,
    PeopleDetailsCardComponent,
    PeopleSearchBarComponent,
    PeoplePageComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    PeopleModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
})
export class PeopleModuleModule {}
