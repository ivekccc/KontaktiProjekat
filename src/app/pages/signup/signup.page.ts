import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from '@angular/fire/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name: string = "";
  email: string = "";
  password: string = "";
  reEnteredPassword="";
  showPassword:boolean=false;
  showReEnterPassword:boolean=false;

  constructor(public navCntrl: NavController, private auth: Auth,public toastController: ToastController) { }

  ngOnInit() {
  }

  async signup() {

    // Provera validnosti email adrese
    if (!this.isValidEmail(this.email)) {
      this.showSingupErrorToast("Nevazeca email adresa!");
      return;
    }


    if (this.password.length <= 6) {
      this.showSingupErrorToast("Sifra mora da sadrzi barem 6 karaktera!")
      return;
    }

    // Provera da li su lozinka i ponovljena lozinka iste
    if (this.password !== this.reEnteredPassword) {
      this.showSingupErrorToast("Sifre se ne poklapaju!")
      return;
    }




    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        this.email,
        this.password
      );

      // Ako je registracija uspešna, možete dodati dodatnu logiku ovde

      this.showSingupErrorToast("Uspesno ste kreirali nalog!");
      this.goToLoginPage();

    } catch (error) {
      this.showSingupErrorToast("Nepoznata greska prilikom registracije!")
    }
  }



  promeniVidljivostSifre(){
    this.showPassword=!this.showPassword;
  }



  promeniVidljivostPonovneSifre(){
    this.showReEnterPassword=!this.showReEnterPassword;
  }




  async showSingupErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position:'top'
    });
  
    toast.present();
  }

async goToLoginPage() {
    this.navCntrl.navigateRoot('/login');
    }


  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
}