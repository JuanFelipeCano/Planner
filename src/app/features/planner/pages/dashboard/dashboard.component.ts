import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { I18nConfig } from '@config';
import { CreateTaskService } from '@features/planner/services';
import { BaseComponent } from '@shared/components';
import { DashboardConfig } from './config/dashboard.config';
import { DASHBOARD_IMPORTS, PROVIDERS } from './config/dashboard.imports';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ ...DASHBOARD_IMPORTS ],
  providers: [ ...PROVIDERS ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent extends BaseComponent implements OnInit {
  public config = DashboardConfig;

  constructor(
    private activatedRoute: ActivatedRoute,
    private createTaskService: CreateTaskService,
  ) {
    super();
  }

  public ngOnInit(): void {
    this.initComponent();
    this.redirectTo('home');
    this.createTaskService.show();
  }

  public redirectTo(route: string): void {
    this.routerProvider.navigate(
      [ route ],
      { relativeTo: this.activatedRoute, skipLocationChange: true }
    );
  }

  public openCreateTask(): void {
    this.createTaskService.show();
  }

  private async initComponent(): Promise<void> {
    await this.translateProvider.loadModule(I18nConfig.modules.planner.DASHBOARD);
  }
}
