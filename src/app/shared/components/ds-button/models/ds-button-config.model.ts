import { DSButtonSize } from './ds-button-size.enum';
import { DSButtonType } from './ds-button-type.enum';

export interface DsButtonConfig {
  label: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: DSButtonType;
  size?: DSButtonSize;
}
