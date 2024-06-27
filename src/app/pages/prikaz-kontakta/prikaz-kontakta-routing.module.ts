import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrikazKontaktaPage } from './prikaz-kontakta.page';

const routes: Routes = [
  {
    path: '',
    component: PrikazKontaktaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrikazKontaktaPageRoutingModule {}
