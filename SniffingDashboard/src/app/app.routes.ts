import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'grid',
    loadComponent: () => import('./pages/sniffing-grid/sniffing-grid').then((m) => m.SniffingGrid),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
  },
  {
    path: 'unavailable',
    loadComponent: () =>
      import('./pages/api-unavailable/api-unavailable').then((m) => m.ApiUnavailable),
  },
  { path: '**', redirectTo: 'dashboard' },
];
