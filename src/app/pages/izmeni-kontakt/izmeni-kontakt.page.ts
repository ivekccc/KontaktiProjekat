import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Kontakt } from '../../service/data.service';

@Component({
  selector: 'app-izmeni-kontakt',
  templateUrl: './izmeni-kontakt.page.html',
  styleUrls: ['./izmeni-kontakt.page.scss'],
})
export class IzmeniKontaktPage implements OnInit {
  @Input() kontakt: any;

  readonlyValue: boolean = true;

  constructor(public modalCtrl: ModalController, private dataService: 
    DataService) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
    }

    goBack() {
      this.modalCtrl.dismiss();
    }

    async updateKontakt(kontakt:Kontakt) {
      await this.dataService.updateKontakt(this.kontakt);
      this.dismiss();
      }


      //omogucva izmenu podataka o korisniku
      enableEdit(){
        if(this.readonlyValue==false){
          this.readonlyValue=true;
        }
        else{
          this.readonlyValue=false
        }
      }
    }
