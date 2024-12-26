/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouterOutlet } from '@angular/router';
import { REGULAR_IMPORTS } from '@config/regular-imports';
import { AddTaskButtonComponent } from '../../../components/add-task-button/add-task-button.component';
import { TabBarComponent } from '../../../components/tab-bar/tab-bar.component';
import { CreateTaskService } from '@features/planner/services';
import { Provider } from '@angular/core';

const COMPONENTS: ReadonlyArray<any> = [
  TabBarComponent,
  AddTaskButtonComponent,
];

export const DASHBOARD_IMPORTS: ReadonlyArray<any> = [
  ...REGULAR_IMPORTS,
  ...COMPONENTS,
  RouterOutlet,
];

export const PROVIDERS: Provider[] = [
  CreateTaskService,
];
