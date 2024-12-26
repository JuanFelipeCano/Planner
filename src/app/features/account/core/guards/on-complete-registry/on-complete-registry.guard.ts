import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserData } from '@features/account/data/user.data';

export const onCompleteRegistryGuard: CanActivateFn = () => {
  const userData = inject(UserData);
  const router = inject(Router);

  return (userData.email && userData.password)
    ? true
    : router.navigate(['register']);
};
