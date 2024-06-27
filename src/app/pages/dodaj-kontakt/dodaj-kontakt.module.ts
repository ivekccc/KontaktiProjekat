import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DodajKontaktPageRoutingModule } from './dodaj-kontakt-routing.module';

import { DodajKontaktPage } from './dodaj-kontakt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DodajKontaktPageRoutingModule
  ],
  declarations: [DodajKontaktPage]
})
export class DodajKontaktPageModule {}
