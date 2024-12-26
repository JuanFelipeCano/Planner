import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() {}

  // private readonly defaultConfig: AlertConfig = {
  //   icon: undefined,
  //   title: undefined,
  //   message: '',
  //   firstButton: {
  //     text: '',
  //     params: undefined,
  //     callback: undefined,
  //   },
  //   secondButton: undefined,
  // };

  // private alert$ = new BehaviorSubject<AlertConfig>(this.defaultConfig);
  // private isVisible$ = new BehaviorSubject<boolean>(false);

  // public getAlert(): Observable<AlertConfig> {
  //   return this.alert$.asObservable();
  // }

  // public isVisible(): Observable<boolean> {
  //   return this.isVisible$.asObservable();
  // }

  // public show(config: AlertConfig): void {
  //   this.isVisible$.next(true);
  //   this.alert$.next(config);
  // }

  // public hide(): void {
  //   this.isVisible$.next(false);
  //   this.alert$.next(this.defaultConfig);
  // }
}
