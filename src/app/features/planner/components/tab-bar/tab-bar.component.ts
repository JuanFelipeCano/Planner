import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from '@shared/components';
import { TabBarConfig } from './config/tab-bar.config';

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [ TranslateModule, IconComponent ],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.scss'
})
export class TabBarComponent {

  public config = TabBarConfig;
  public activeRoute!: string;

  @Output() public clicked = new EventEmitter<string>();

  constructor() {
    this.activeRoute = this.config.tabs[0].route;
  }

  public onClick(route: string): void {
    this.activeRoute = route;
    this.clicked.emit(route);
  }
}
