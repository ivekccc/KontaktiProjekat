import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IzmeniKontaktPage } from './izmeni-kontakt.page';

const routes: Routes = [
  {
    path: '',
    component: IzmeniKontaktPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IzmeniKontaktPageRoutingModule {}
