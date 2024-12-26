import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from '@features/authentication/core/guards';

export const PLANNER_ROUTES: Routes = [
  {
    path: 'planner',
    loadComponent: () => import('@features/planner/pages/dashboard/dashboard.component')
      .then(c => c.DashboardComponent),
    data: { animation: 'DashboardPage' },
    canActivate: [ isAuthenticatedGuard ],
    canActivateChild: [ isAuthenticatedGuard ],
    children: [
      {
        path: 'home',
        loadComponent: () => import('@features/planner/pages/home/home.component')
          .then(c => c.HomeComponent),
        data: { animation: 'HomePage' },
      },
      {
        path: 'tasks',
        loadComponent: () => import('@features/planner/pages/tasks/tasks.component')
          .then(c => c.TasksComponent),
        data: { animation: 'TasksPage' },
      },
      {
        path: 'profile',
        loadComponent: () => import('@features/planner/pages/profile/profile.component')
          .then(c => c.ProfileComponent),
        data: { animation: 'ProfilePage' },
      },
    ],
  },
];
