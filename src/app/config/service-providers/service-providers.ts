import { Provider } from '@angular/core';
import { AccountContract } from '@features/account/core/contracts';
import { ApiAccountRepository } from '@features/account/core/repositories';
import { AuthenticationContract } from '@features/authentication/core/contracts';
import { ApiAuthenticationRepository } from '@features/authentication/core/repositories';

export const SERVICE_PROVIDERS: Array<Provider> = [
  {
    provide: AuthenticationContract,
    useClass: ApiAuthenticationRepository,
  },
  {
    provide: AccountContract,
    useClass: ApiAccountRepository,
  },
];
