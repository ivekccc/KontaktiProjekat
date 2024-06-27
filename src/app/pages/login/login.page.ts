import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';
import { HomePage } from '../kontakti/home.page';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  name: string = "";
  email: string = "";
  password: string = "";  
  showPassword:boolean=false;

  constructor(public toastController: ToastController,
    public navCntrl: NavController, private auth: Auth,
    public modalCtrl: ModalController) {}

    async login() {
      try {
        const userCredential = await signInWithEmailAndPassword(
          this.auth,
          this.email,
          this.password
        );
    
        if (userCredential.user) {
          this.showLoginErrorToast('Uspesna prijava');
          this.goToHomePage();
        }
    
        return userCredential.user;
      } catch (error) {
        console.error('Login failed', error);
        this.showLoginErrorToast('Losi podaci za logovanje. Pokusajte ponovo');
        this.email="";
        this.password="";
        return null; 
      }
    }
    
    async showLoginErrorToast(message: string) {
      const toast = await this.toastController.create({
        message,
        duration: 2000,
        position:'top'
      });
    
      toast.present();
    }

  async goToHomePage() {
    this.navCntrl.navigateRoot('/home');
    }
 

  promeniVidljivostSifre(){
    this.showPassword=!this.showPassword;
  }
}