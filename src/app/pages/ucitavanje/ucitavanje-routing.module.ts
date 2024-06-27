import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UcitavanjePage } from './ucitavanje.page';

const routes: Routes = [
  {
    path: '',
    component: UcitavanjePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UcitavanjePageRoutingModule {}
