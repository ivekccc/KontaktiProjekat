import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DodajKontaktPage } from './dodaj-kontakt.page';

const routes: Routes = [
  {
    path: '',
    component: DodajKontaktPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DodajKontaktPageRoutingModule {}
