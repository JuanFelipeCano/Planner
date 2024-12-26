/* eslint-disable @typescript-eslint/no-explicit-any */
import { Type } from '@angular/core';

export interface FullScreenOptions {
  component: Type<any>;
  componentProps?: { [key: string]: any };
}
