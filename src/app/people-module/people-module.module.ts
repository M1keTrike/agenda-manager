import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDashboardComponent } from './people-dashboard/people-dashboard.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { PeopleCardComponent } from './people-card/people-card.component';
import { PeopleDetailsCardComponent } from './people-details-card/people-details-card.component';
import { PeopleSearchBarComponent } from './people-search-bar/people-search-bar.component';
import { PeopleModuleRoutingModule } from './people-module-routing.module';
import { PeoplePageComponent } from './people-page/people-page.component';

@NgModule({
  declarations: [
    PeopleDashboardComponent,
    PeopleFormComponent,
    PeopleCardComponent,
    PeopleDetailsCardComponent,
    PeopleSearchBarComponent,
    PeoplePageComponent,
  ],
  imports: [CommonModule, PeopleModuleRoutingModule],
})
export class PeopleModuleModule {}
