import { Routes } from '@angular/router';

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: 'sign-in',
    loadComponent: () => import('@features/authentication/pages/sign-in/sign-in.component')
      .then(c => c.SignInComponent),
    data: { animation: 'SigInPage' },
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
];
