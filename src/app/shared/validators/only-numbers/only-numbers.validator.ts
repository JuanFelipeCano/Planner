import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Patterns } from '../patterns';

export const OnlyNumbersValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;

  if (!value) {
    return null;
  }

  const isValid = Patterns.onlyNumbers.test(value);

  return !isValid ? { onlyNumbers: true } : null;
}
