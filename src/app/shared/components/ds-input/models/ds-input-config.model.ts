import { FormControl } from '@angular/forms';
import { ErrorMessage } from '@shared/directives';
import { DSInputType } from './ds-input-type.enum';

export interface DsInputConfig {
  id?: string;
  label: string;
  type: DSInputType;
  control: FormControl;
  errorMessages?: ErrorMessage;
}
