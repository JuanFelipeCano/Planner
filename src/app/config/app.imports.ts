/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterOutlet } from '@angular/router';
import { ANGULAR_COMMON_MODULE } from './regular-imports';
import { AlertComponent, AlertMessageComponent, LoaderComponent, ToastComponent } from '@shared/components';

const COMPONENTS: ReadonlyArray<any> = [
  LoaderComponent,
  ToastComponent,
  AlertMessageComponent,
  AlertComponent,
];

export const APP_IMPORTS: ReadonlyArray<any> = [
  ...ANGULAR_COMMON_MODULE,
  ...COMPONENTS,
  RouterOutlet,
];
