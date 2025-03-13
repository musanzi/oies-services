import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Accueil',
    loadComponent: () => import('./landing/features/home/home.component').then((m) => m.HomeComponent)
  }
];
