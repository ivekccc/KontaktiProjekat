import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../service/data.service';
import { HomePage } from '../kontakti/home.page';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';



@Component({
  selector: 'app-dodaj-kontakt',
  templateUrl: './dodaj-kontakt.page.html',
  styleUrls: ['./dodaj-kontakt.page.scss'],
})  

export class DodajKontaktPage implements OnInit {

  kontaktIme!:string;
  kontaktPrezime:string="";
  kontaktEmail:string="";
  kontaktBrojTelefona!:string;
  omiljeniKontakt:boolean=false;

  constructor(public modalCtrl: ModalController, private dataservice: 
DataService) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
    }

    async addKontakt() {
      await this.dataservice.addKontakt(
      {
      ime: this.kontaktIme,
      prezime:this.kontaktPrezime,
      brojTelefona:this.kontaktBrojTelefona,
      email:this.kontaktEmail,
      omiljeniKontakt:this.omiljeniKontakt,
      }
      );
      this.dismiss();
      }

      async goToHomePage() {
        const modal = await this.modalCtrl.create({
        component: HomePage
        })
        return await modal.present();
        }
        goBack() {
          this.modalCtrl.dismiss();
        }
}
