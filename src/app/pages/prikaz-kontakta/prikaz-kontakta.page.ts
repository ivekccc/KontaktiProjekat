import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Kontakt } from '../../service/data.service';
@Component({
selector: 'app-prikaz-kontakta',
templateUrl: './prikaz-kontakta.page.html',
styleUrls: ['./prikaz-kontakta.page.scss'],
})
export class PrikazKontaktaPage implements OnInit {
@Input() kontakt: any;
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
}
