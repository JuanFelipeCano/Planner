import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ChildrenOutletContexts, Data } from '@angular/router';
import { APP_IMPORTS, I18nConfig } from '@config';
import { TranslateService } from '@ngx-translate/core';
import { slideInOut } from '@shared/animations';
import { FullScreenController } from '@shared/components/full-screen';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ...APP_IMPORTS ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [ slideInOut ],
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('fullScreenRef', { read: ViewContainerRef })
  public fullScreenRef!: ViewContainerRef;

  constructor(
    private translateService: TranslateService,
    private contexts: ChildrenOutletContexts,
    private fullScreenController: FullScreenController
  ) {
    this.configTranslation();
  }

  public ngOnInit(): void {
    this.setTheme();
    this.subscribeToThemeChange();
  }

  public ngAfterViewInit(): void {
    this.fullScreenController.setViewContainerRef(this.fullScreenRef);
    this.fullScreenController.resolveComponentIntoPage();
  }

  public getRouteAnimationData(): Data {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  private configTranslation(): void {
    // TODO: get configuration for lang from localstore
    const defaultLang = I18nConfig.defaultLang;

    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
    document.documentElement.lang = defaultLang;
  }

  private setTheme(): void {
    const colorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark-theme' : 'light-theme';

    document.querySelector('body')!.className = colorScheme;
  }

  private subscribeToThemeChange(): void {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      const colorScheme = event.matches ? 'dark-theme' : 'light-theme';
      document.querySelector('body')!.className = colorScheme;
  });
  }
}
