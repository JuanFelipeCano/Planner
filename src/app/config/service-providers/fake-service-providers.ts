import { Provider } from '@angular/core';
import { AccountContract } from '@features/account/core/contracts';
import { FakeAccountRepository } from '@features/account/core/repositories';
import { AuthenticationContract } from '@features/authentication/core/contracts';
import { FakeAuthenticationRepository } from '@features/authentication/core/repositories';

export const SERVICE_PROVIDERS: Array<Provider> = [
  {
    provide: AuthenticationContract,
    useClass: FakeAuthenticationRepository,
  },
  {
    provide: AccountContract,
    useClass: FakeAccountRepository,
  },
];
