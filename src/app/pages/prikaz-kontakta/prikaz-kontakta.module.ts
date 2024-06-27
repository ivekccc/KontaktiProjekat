import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrikazKontaktaPageRoutingModule } from './prikaz-kontakta-routing.module';

import { PrikazKontaktaPage } from './prikaz-kontakta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrikazKontaktaPageRoutingModule
  ],
  declarations: [PrikazKontaktaPage]
})
export class PrikazKontaktaPageModule {}
