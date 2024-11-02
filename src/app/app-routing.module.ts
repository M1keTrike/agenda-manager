import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () =>
      import('./people-module/people-module.module').then(
        (m) => m.PeopleModuleModule
      ),
  },
  {
    path: 'agends',
    loadChildren: () =>
      import('./agends-module/agends-module.module').then(
        (m) => m.AgendsModuleModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./events-module/events-module.module').then(
        (m) => m.EventsModuleModule
      ),
  },
  { path: '', redirectTo: 'people', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
