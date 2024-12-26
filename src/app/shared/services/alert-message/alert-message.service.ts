/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { AlertMessageConfig } from '@shared/components/alert-message';
import { sleep } from '@shared/utils';
import { BehaviorSubject, Observable } from 'rxjs';

const DELAY = 100;

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  private readonly defaultConfig: AlertMessageConfig = {
    icon: undefined,
    title: undefined,
    message: '',
    firstButton: {
      text: '',
      params: undefined,
      callback: undefined,
    },
    secondButton: undefined,
  };

  private alertMessage$ = new BehaviorSubject<AlertMessageConfig>(this.defaultConfig);
  private isVisible$ = new BehaviorSubject<boolean>(false);
  private animationState$ = new BehaviorSubject<string>('');

  private _promise: PromiseConstructor = {
    resolve: () => {},
    reject: () => {}
  } as any;

  public getAlertMessage(): Observable<AlertMessageConfig> {
    return this.alertMessage$.asObservable();
  }

  public isVisible(): Observable<boolean> {
    return this.isVisible$.asObservable();
  }

  public getAnimationState(): Observable<string> {
    return this.animationState$.asObservable();
  }

  public create(config: AlertMessageConfig): this {
    this.animationState$.next('fadeIn');
    this.alertMessage$.next(config);
    return this;
  }

  public async present(): Promise<this> {
    this.isVisible$.next(true);
    return this;
  }

  public async dismiss(data: unknown): Promise<void> {
    this.animationState$.next('fadeOut');
    await sleep(DELAY);

    this._promise.resolve(data);
    this.isVisible$.next(false);
    this.alertMessage$.next(this.defaultConfig);
  }

  public onDidDismiss<T = any>(): Promise<T> {
    return new Promise<any>((resolve, reject) => {
      this._promise.resolve = resolve as any;
      this._promise.reject = reject as any;
    });
  }
}
