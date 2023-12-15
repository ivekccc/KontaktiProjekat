import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dodaj-kontakt',
    loadChildren: () => import('./dodaj-kontakt/dodaj-kontakt.module').then( m => m.DodajKontaktPageModule)
  },
  {
    path: 'izmeni-kontakt',
    loadChildren: () => import('./izmeni-kontakt/izmeni-kontakt.module').then( m => m.IzmeniKontaktPageModule)
  },
  {
    path: 'prikaz-kontakta',
    loadChildren: () => import('./prikaz-kontakta/prikaz-kontakta.module').then( m => m.PrikazKontaktaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
