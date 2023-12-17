import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DodajKontaktPage } from '../dodaj-kontakt/dodaj-kontakt.page';
import { IzmeniKontaktPage } from '../izmeni-kontakt/izmeni-kontakt.page';
import { PrikazKontaktaPage } from '../prikaz-kontakta/prikaz-kontakta.page';

type Kontakt={
  id?: number;
  ime?: string;
  prezime?: string;
  brojTelefona?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  kontakti: Array<Kontakt>=[];
  constructor(public modalCtrl: ModalController) {}
  
  ngOnInit(): void {
    this.kontakti=[
      {
       id:1,
       ime:"Pingo",
       brojTelefona:"0649829541"
      },
      {
        id:2,
        ime:"Andrija",
        prezime:"Jelisavcic",
        brojTelefona:"0612567497"
      },
      {
        id:3,
        ime:"Madre",
        brojTelefona:"0603058712",
      },
    ]
  }

  async goToDodajKontaktPage() {
    const modal = await this.modalCtrl.create({
    component: DodajKontaktPage
    })
    return await modal.present();
    }
    async goToIzmeniKontaktPage(kontakt:Kontakt) {
      const modal = await this.modalCtrl.create({
      component: IzmeniKontaktPage,
      componentProps: kontakt
      })
      return await modal.present(); }
    
      

}
