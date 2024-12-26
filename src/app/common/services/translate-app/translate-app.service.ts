import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { I18nMessages, TranslateProvider } from '@common/providers';
import { I18nConfig } from '@config';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom, take } from 'rxjs';

@Injectable()
export class TranslateAppService implements TranslateProvider {

  private _httpClient = inject(HttpClient);
  private _translateService = inject(TranslateService);

  public get<T = I18nMessages>(i18nKey: string, interpolateParams?: Record<string, string>): T {
    return this._translateService.instant(i18nKey, interpolateParams);
  }

  public async loadModule(name: string, callback?: (response: I18nMessages) => void): Promise<void> {
    const currentLang = this._translateService.currentLang;

    const resourceUri = [
      I18nConfig.resourceUri,
      name,
      '/',
      currentLang,
      I18nConfig.suffix,
    ].join('');

    const response = await this.getTranslations(resourceUri);

    this._translateService.setTranslation(currentLang, { [name]: response }, true);

    if (callback) {
      callback.call(this, response as I18nMessages);
    }
  }

  private getTranslations(resourceUri: string) {
    return lastValueFrom(this._httpClient.get(resourceUri).pipe(take(1)));
  }
}
