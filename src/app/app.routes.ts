import { Routes } from '@angular/router';
import { ACCOUNT_ROUTES } from '@features/account/account.routes';
import { AUTHENTICATION_ROUTES } from '@features/authentication/authentication.routes';
import { PLANNER_ROUTES } from '@features/planner/planner.routes';
import { PUBLIC_ROUTES } from '@features/public/public.routes';

export const routes: Routes = [
  ...AUTHENTICATION_ROUTES,
  ...PUBLIC_ROUTES,
  ...ACCOUNT_ROUTES,
  ...PLANNER_ROUTES,
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full',
  },
];
