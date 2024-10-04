import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendsAgendsPageComponent } from './agends-agends-page/agends-agends-page.component';

const routes: Routes = [{ path: '', component: AgendsAgendsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendsModuleRoutingModule {}
