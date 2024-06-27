import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ucitavanje',
  templateUrl: './ucitavanje.page.html',
  styleUrls: ['./ucitavanje.page.scss'],
})
export class UcitavanjePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.navigateToLogin();
    }, 5000);
  }
  navigateToLogin() {
    this.navCtrl.navigateRoot('/login');
  }

}
