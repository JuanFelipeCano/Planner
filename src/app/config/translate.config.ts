import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { I18nConfig } from './i18n.config';

const createTranslateLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, `${ I18nConfig.resourcePath }sign-in/`, I18nConfig.suffix);

export const provideTranslation = () => ({
  loader: {
    provide: TranslateLoader,
    useFactory: createTranslateLoader,
    deps: [HttpClient],
  },
});
