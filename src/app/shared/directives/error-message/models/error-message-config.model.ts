import { AbstractControl } from '@angular/forms';

export interface ErrorMessageConfig {
  control: AbstractControl,
  errorMessages?: ErrorMessage,
}

export type ErrorMessage = Record<string, string>;
