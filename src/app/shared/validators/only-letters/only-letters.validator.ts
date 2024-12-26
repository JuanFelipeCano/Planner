import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Patterns } from '../patterns';

export const OnlyLettersValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = control.value;

  if (value.length === 0) {
    return null;
  }

  const hasOnlyLetters = Patterns.onlyLetters.test(value);
  const isValid = value.trim().length > 0 && hasOnlyLetters;

  return !isValid ? { onlyLetters: true } : null;
}
