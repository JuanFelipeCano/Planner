import { Provider } from '@angular/core';
import { SessionStorageProvider, TranslateProvider } from '@common/providers';
import { SessionStorageService, TranslateAppService } from '@common/services';

export const GLOBAL_PROVIDERS: Array<Provider> = [
  {
    provide: TranslateProvider,
    useClass: TranslateAppService,
  },
  {
    provide: SessionStorageProvider,
    useClass: SessionStorageService,
  },
];
