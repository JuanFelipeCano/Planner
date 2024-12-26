/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DsButtonComponent, DsHeaderComponent, DsInputComponent, DsTitleComponent } from '@shared/components';

export const REGULAR_IMPORTS: ReadonlyArray<any> = [
  TranslateModule,
  FormsModule,
  ReactiveFormsModule,
];

export const ANGULAR_COMMON_MODULE: ReadonlyArray<any> = [
  CommonModule,
];

export const DS_COMPONENTS: ReadonlyArray<any> = [
  DsInputComponent,
  DsButtonComponent,
  DsHeaderComponent,
  DsTitleComponent,
];
