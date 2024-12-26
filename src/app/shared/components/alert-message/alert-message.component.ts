import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '@shared/animations';
import { AlertMessageService } from '@shared/services';
import { DSButtonType } from '../ds-button';
import { ALERT_MESSAGE_IMPORTS } from './config/alert-message.imports';
import { AlertMessageButtonConfig } from './models/alert-message-button-config.model';
import { AlertMessageConfig } from './models/alert-message-config.model';
import { AlertMessageIcon } from './models/alert-message-icon.enum';

@Component({
  selector: 'app-alert-message',
  standalone: true,
  imports: [ ...ALERT_MESSAGE_IMPORTS ],
  templateUrl: './alert-message.component.html',
  styleUrl: './alert-message.component.scss',
  animations: [ fadeInOut ],
})
export class AlertMessageComponent implements OnInit {
  public config!: AlertMessageConfig;
  public isFirstButtonLoading!: boolean;
  public isSecondButtonLoading!: boolean;
  public readonly secondButtonType = DSButtonType.SECONDARY
  public readonly alertMessageIcon = AlertMessageIcon;

  constructor(public alertMessageService: AlertMessageService) {}

  public ngOnInit(): void {
    this.setDefaultState();
    this.alertMessageService.getAlertMessage().subscribe({
      next: (config) => {
        this.config = config;
      },
    });
  }

  public firstButtonAction(): void {
    this.isFirstButtonLoading = true;
    this.callAction(this.config.firstButton);
  }

  public secondButtonAction(): void {
    this.isSecondButtonLoading = true;
    this.callAction(this.config.secondButton!);
  }

  private async callAction(buttonConfig: AlertMessageButtonConfig): Promise<void> {
    const { callback, params } = buttonConfig;

    if (callback) {
      await callback(params);
    }

    this.hide(params);
  }

  private hide(params: unknown): void {
    this.setDefaultState();
    this.alertMessageService.dismiss(params);
  }

  private setDefaultState(): void {
    this.isFirstButtonLoading = false;
    this.isSecondButtonLoading = false;
  }
}
