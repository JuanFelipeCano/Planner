import { CommonModule } from '@angular/common';
import { forwardRef } from '@angular/core';
import { DsButtonComponent } from '../../ds-button';
import { DsHeaderComponent } from '../../ds-header/ds-header.component';
import { DsTitleComponent } from '../../ds-title/ds-title.component';
import { IconComponent } from '@shared/components/icon/icon.component';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ALERT_MESSAGE_IMPORTS: ReadonlyArray<any> = [
  CommonModule,
  forwardRef(() => DsButtonComponent),
  forwardRef(() => DsHeaderComponent),
  forwardRef(() => DsTitleComponent),
  forwardRef(() => IconComponent),
];
