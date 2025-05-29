import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./pages/home/home-page.component').then((c) => c.HomePageComponent)
  }
];
