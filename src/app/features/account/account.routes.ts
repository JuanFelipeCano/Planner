import { Routes } from '@angular/router';
import { onCancelRegistryGuard, onCompleteRegistryGuard } from './core/guards';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: 'register',
    loadComponent: () => import('@features/account/pages/register/register.component')
      .then(c => c.RegisterComponent),
    data: { animation: 'RegisterPage' },
  },
  {
    path: 'complete-registry',
    loadComponent: () => import('@features/account/pages/complete-registry/complete-registry.component')
      .then(c => c.CompleteRegistryComponent),
    data: { animation: 'CompleteRegistryPage' },
    canDeactivate: [ onCancelRegistryGuard ],
    canActivate: [ onCompleteRegistryGuard ],
  },
];
