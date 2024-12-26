import { Injectable } from '@angular/core';
import { ToastConfig, ToastPosition, ToastType } from '@shared/components/toast';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private readonly defaultConfig = { message: '', show: false };
  private toast$: BehaviorSubject<ToastConfig> = new BehaviorSubject<ToastConfig>(this.defaultConfig);

  public getToast(): Observable<ToastConfig> {
    return this.toast$.asObservable();
  }

  public show(message: string, icon?: unknown, type?: ToastType, position?: ToastPosition, duration?: number): void {
    this.toast$.next({
      message,
      show: true,
      icon,
      duration,
      position,
      type,
    });
  }

  public success(message: string, icon?: unknown, position?: ToastPosition, duration?: number) {
    this.show(message, icon, ToastType.SUCCESS, position, duration);
  }

  public info(message: string, icon?: unknown, position?: ToastPosition, duration?: number) {
    this.show(message, icon, ToastType.INFO, position, duration);
  }

  public danger(message: string, icon?: unknown, position?: ToastPosition, duration?: number) {
    this.show(message, icon, ToastType.DANGER, position, duration);
  }

  public warning(message: string, icon?: unknown, position?: ToastPosition, duration?: number) {
    this.show(message, icon, ToastType.WARNING, position, duration);
  }

  public hide(): void {
    this.toast$.next(this.defaultConfig);
  }
}
