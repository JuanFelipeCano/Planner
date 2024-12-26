import { AlertMessageButtonConfig } from './alert-message-button-config.model';
import { AlertMessageIcon } from './alert-message-icon.enum';

export interface AlertMessageConfig {
  icon?: AlertMessageIcon;
  title?: string;
  message: string;
  firstButton: AlertMessageButtonConfig;
  secondButton?: AlertMessageButtonConfig;
}
