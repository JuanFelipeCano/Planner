import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Patterns } from '../patterns';

export const EmailValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;

  if (value.length === 0) {
    return null;
  }

  const isValid = Patterns.email.test(value);

  return !isValid ? { email: true } : null;
}
