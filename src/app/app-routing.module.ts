import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/kontakti/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'ucitavanje',
    pathMatch: 'full'
  },
  {
    path: 'dodaj-kontakt',
    loadChildren: () => import('./pages/dodaj-kontakt/dodaj-kontakt.module').then( m => m.DodajKontaktPageModule)
  },
  {
    path: 'izmeni-kontakt',
    loadChildren: () => import('./pages/izmeni-kontakt/izmeni-kontakt.module').then( m => m.IzmeniKontaktPageModule)
  },
  {
    path: 'prikaz-kontakta',
    loadChildren: () => import('./pages/prikaz-kontakta/prikaz-kontakta.module').then( m => m.PrikazKontaktaPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'ucitavanje',
    loadChildren: () => import('./pages/ucitavanje/ucitavanje.module').then( m => m.UcitavanjePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
