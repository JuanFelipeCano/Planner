import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
  {
    path: 'page-not-found',
    loadComponent: () => import('@features/public/pages/page-not-found/page-not-found.component')
      .then(c => c.PageNotFoundComponent),
    data: { animation: 'NotFoundPage' },
  },
];
