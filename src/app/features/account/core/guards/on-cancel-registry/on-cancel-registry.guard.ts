import { inject } from '@angular/core';
import { CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { TranslateProvider } from '@common/providers';
import { CompleteRegistryComponent } from '@features/account/pages/complete-registry/complete-registry.component';
import { AlertMessageIcon } from '@shared/components/alert-message/models/alert-message-icon.enum';
import { AlertMessageService } from '@shared/services';

const i18n = Object.freeze({
  title: 'complete-registry.on-cancel-registry-alert.title',
  message: 'complete-registry.on-cancel-registry-alert.message',
  acceptButton: 'complete-registry.on-cancel-registry-alert.accept-button',
  cancelButton: 'complete-registry.on-cancel-registry-alert.cancel-button',
});

export const onCancelRegistryGuard: CanDeactivateFn<CompleteRegistryComponent> = async (_c, _cR, _cS, nextState: RouterStateSnapshot) => {
  if (nextState.url === '/register') {
    return await showAlertMessage();
  }

  return true;
};

const showAlertMessage = async () => {
  const alertMessageService = inject(AlertMessageService);
  const translateProvider = inject(TranslateProvider);

  const alertMessage = alertMessageService.create({
    icon: AlertMessageIcon.INFO,
    title: translateProvider.get(i18n.title),
    message: translateProvider.get(i18n.message),
    firstButton: {
      text: translateProvider.get(i18n.acceptButton),
      params: false,
    },
    secondButton: {
      text: translateProvider.get(i18n.cancelButton),
      params: true,
    },
  });

  alertMessage.present();

  return await alertMessage.onDidDismiss<boolean>();
};
