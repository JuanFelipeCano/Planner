import { DSButtonSize, DSButtonType } from '@shared/components/ds-button';
import { DSInputType } from '@shared/components/ds-input';

export const SignInConfig = Object.freeze({
  i18n: {
    title: 'sign-in.title',
    errors: {
      general: 'sign-in.errors.general',
      invalidCredentials: 'sign-in.errors.invalid-credentials',
    },
  },
  form: {
    email: {
      id: 'email',
      label: 'sign-in.form.email',
      type: DSInputType.EMAIL,
      validations: {
        required: 'sign-in.form.validation-messages.required',
        validEmail: 'sign-in.form.validation-messages.valid-email',
      },
    },
    password: {
      id: 'password',
      label: 'sign-in.form.password',
      type: DSInputType.PASSWORD,
      validations: {
        required: 'sign-in.form.validation-messages.required',
      },
    },
    forgotPassword: {
      label: 'sign-in.form.forgot-password',
      type: DSButtonType.LINK,
      size: DSButtonSize.SMALL,
    },
    button: {
      label: 'sign-in.form.submit-button',
    },
    createAccount: {
      label: 'sign-in.form.create-account',
      type: DSButtonType.LINK,
      size: DSButtonSize.SMALL,
    },
  },
  routes: {
    register: 'register',
    planner: 'planner',
  },
});
