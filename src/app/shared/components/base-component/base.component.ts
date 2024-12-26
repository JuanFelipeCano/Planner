import { Component, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateProvider } from '@common/providers';
import { AlertMessageService, AlertService, LoaderService, ToastService } from '@shared/services';
import { Subject } from 'rxjs';

@Component({
  standalone: true,
  template: '',
})
export class BaseComponent implements OnDestroy {
  protected translateProvider = inject(TranslateProvider);
  protected routerProvider = inject(Router);
  protected loaderService = inject(LoaderService);
  protected toastService = inject(ToastService);
  protected alertMessageService = inject(AlertMessageService);
  protected alertService = inject(AlertService);

  protected destroy$ = new Subject<void>;

  // public trackPageVisit() {
  //   const currentUrl = this.router.url;
  //   this.analyticsService.pageViewed({url: currentUrl})
  // }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ngOnInit(): void {
  //   this.subscription$ = this.service.getSubscription$().pipe(
  //     takeUntil(this.destroyed$)
  //   ).subscribe();
  // }
}
