import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    loadComponent: () => import('./landing/feature/home/home.component').then((m) => m.HomeComponent)
  }
];
