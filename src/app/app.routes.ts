import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/ui', pathMatch: 'full' },
  {
    path: 'ui',
    loadComponent: () => import('./components/ui/ui').then((m) => m.Ui),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      {
        path: 'search',
        loadComponent: () =>
          import('./components/business-facilitation/business-facilitation').then(
            (m) => m.BusinessFacilitation,
          ),
      },
    ],
  },
  { path: 'login', loadComponent: () => import('./components/login/login').then((m) => m.Login) },
  { path: '**', redirectTo: '/ui' },
];
