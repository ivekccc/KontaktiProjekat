import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IzmeniKontaktPageRoutingModule } from './izmeni-kontakt-routing.module';

import { IzmeniKontaktPage } from './izmeni-kontakt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IzmeniKontaktPageRoutingModule
  ],
  declarations: [IzmeniKontaktPage]
})
export class IzmeniKontaktPageModule {}
