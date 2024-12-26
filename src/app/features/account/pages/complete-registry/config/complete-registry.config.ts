import { DSButtonSize, DSButtonType } from '@shared/components/ds-button';
import { DSInputType } from '@shared/components/ds-input';

export const CompleteRegistryConfig = Object.freeze({
  i18n: {
    title: 'complete-registry.title',
    errors: {
      general: 'complete-registry.errors.general',
    },
  },
  form: {
    name: {
      id: 'name',
      label: 'complete-registry.form.name',
      type: DSInputType.TEXT,
      validations: {
        required: 'complete-registry.form.validation-messages.required',
        onlyLetters: 'complete-registry.form.validation-messages.only-letters',
      },
    },
    lastname: {
      id: 'lastname',
      label: 'complete-registry.form.lastname',
      type: DSInputType.TEXT,
      validations: {
        required: 'complete-registry.form.validation-messages.required',
        onlyLetters: 'complete-registry.form.validation-messages.only-letters',
      },
    },
    phone: {
      id: 'phone',
      label: 'complete-registry.form.phone',
      type: DSInputType.NUMBER,
      validations: {
        onlyNumbers: 'complete-registry.form.validation-messages.only-numbers',
      },
    },
    button: {
      label: 'complete-registry.form.submit-button',
    },
  },
  signIn: {
    label: 'complete-registry.skip-step',
    type: DSButtonType.LINK,
    size: DSButtonSize.SMALL,
  },
  routes: {
    signIn: '/sign-in',
  },
});
