import { ToastPosition } from './toast-position.enum';
import { ToastType } from './toast-type.enum';

/**
 * @param duration in miliseconds - default 3000
 * @param position default bottom-center
 * @param type default success
 */
export interface ToastConfig {
  message: string;
  show: boolean;
  icon?: unknown;
  duration?: number;
  position?: ToastPosition;
  type?: ToastType;
}
