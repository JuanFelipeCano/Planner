import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translator',
  standalone: true
})
export class TranslatorPipe implements PipeTransform {

  private readonly _translateService = inject(TranslateService);

  public transform(value: string): string {
    if (!value || !value.length) {
      return value;
    }

    const keys = value.split('.');
    let val = this._translateService.translations[this._translateService.currentLang];

    keys.forEach(key => {
      if (!val[key]) {
        return;
      }

      val = val[key];
    });

    return val;
  }
}
