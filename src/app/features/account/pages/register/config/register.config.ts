import { DSButtonSize, DSButtonType } from '@shared/components/ds-button';
import { DSInputType } from '@shared/components/ds-input';

export const RegisterConfig = Object.freeze({
  i18n: {
    title: 'register.title',
    errors: {
      general: 'register.errors.general',
      existingUser: 'register.errors.existing-user',
    },
  },
  form: {
    email: {
      id: 'email',
      label: 'register.form.email',
      type: DSInputType.EMAIL,
      validations: {
        required: 'register.form.validation-messages.required',
        validEmail: 'register.form.validation-messages.valid-email',
      },
    },
    password: {
      id: 'password',
      label: 'register.form.password',
      type: DSInputType.PASSWORD,
      validations: {
        required: 'register.form.validation-messages.required',
      },
    },
    button: {
      label: 'register.form.submit-button',
    },
  },
  signIn: {
    label: 'register.sign-in',
    type: DSButtonType.LINK,
    size: DSButtonSize.SMALL,
  },
  routes: {
    signIn: 'sign-in',
    completeRegistry: 'complete-registry',
  },
});
