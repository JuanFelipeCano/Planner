import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppData } from '@common/app-data';
import { SessionStorageProvider } from '@common/providers';

export const isAuthenticatedGuard: CanActivateFn = async () => {
  const sessionStorageProvider = inject(SessionStorageProvider);
  const router = inject(Router);

  const isAuthenticated: boolean = !!(await sessionStorageProvider.get<string>(AppData.AuthToken));

  return isAuthenticated ? true : router.navigate(['sign-in']);
};
