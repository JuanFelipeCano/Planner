import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { routes } from '../app.routes';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from '@config/translate.config';
import { GLOBAL_PROVIDERS } from '@config/app-providers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SERVICE_PROVIDERS } from './service-providers';
import { errorInterceptor, headersInterceptor } from '@api/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions(),
      withComponentInputBinding()
    ),
    importProvidersFrom(
      HttpClientModule,
      TranslateModule.forRoot(provideTranslation()),
    ),
    provideHttpClient(
      withInterceptors([
        errorInterceptor,
        headersInterceptor,
      ]),
    ),
    importProvidersFrom(BrowserAnimationsModule),
    ...GLOBAL_PROVIDERS,
    ...SERVICE_PROVIDERS,
  ],
};
