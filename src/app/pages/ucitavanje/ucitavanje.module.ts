import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UcitavanjePageRoutingModule } from './ucitavanje-routing.module';

import { UcitavanjePage } from './ucitavanje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UcitavanjePageRoutingModule
  ],
  declarations: [UcitavanjePage]
})
export class UcitavanjePageModule {}
