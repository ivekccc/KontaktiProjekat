import { Component, OnInit,OnDestroy} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DodajKontaktPage } from '../dodaj-kontakt/dodaj-kontakt.page';
import { IzmeniKontaktPage } from '../izmeni-kontakt/izmeni-kontakt.page';
import { PrikazKontaktaPage } from '../prikaz-kontakta/prikaz-kontakta.page';
//za rad sa firebase bazom podataka
import { DataService } from '../../service/data.service';
import { Subscription } from 'rxjs';
import { PopoverController } from '@ionic/angular';


type Kontakt={
  id?: number;
  ime?: string;
  prezime?: string;
  brojTelefona?: string;
  email?:string
  omiljeniKontakt?:boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit,OnDestroy {

  kontakti:any;
  sub: Subscription = new Subscription;

  constructor(public modalCtrl: ModalController,
    private dataService: DataService,
    private popoverController: PopoverController) {}

  ngOnDestroy(): void {
   this.sub.unsubscribe();
  }
  
  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    this.sub = this.dataService.getkontakt().subscribe((res) => {
    this.kontakti = res;
    console.log(this.kontakti);
    });
  }

    async deleteKontakt(kontakt: any) {
    await this.dataService.deleteKontakt(kontakt);
    }

  async goToDodajKontaktPage() {
    const modal = await this.modalCtrl.create({
    component: DodajKontaktPage
    })
    this.popoverController.dismiss();
    return await modal.present();
    }
    async goToIzmeniKontaktPage(kontakt:Kontakt) {
      const modal = await this.modalCtrl.create({
      component: IzmeniKontaktPage,
      componentProps: {
        'kontakt':kontakt
      }
      })
      this.popoverController.dismiss();
      return await modal.present(); }
    
      async deleteKontaktAndClosePopover(kontakt:Kontakt){
        this.deleteKontakt(kontakt);
        this.closePopover();
      }
      ionViewWillLeave() {
        this.closePopover();
      }
      closePopover() {
        this.popoverController.dismiss();
      }

      async goToPrikazKontaktaPage(kontakt:Kontakt) {
        const modal = await this.modalCtrl.create({
        component: PrikazKontaktaPage,
        componentProps: {
          'kontakt':kontakt
        }
        })
        return await modal.present(); }

    }
