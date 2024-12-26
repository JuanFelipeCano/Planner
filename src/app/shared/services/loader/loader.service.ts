import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isActive$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getLoader(): Observable<boolean> {
    return this.isActive$.asObservable();
  }

  public show(): void {
    this.isActive$.next(true);
  }

  public hide(): void {
    this.isActive$.next(false);
  }

  public toggle(): void {
    this.isActive$.next(!this.isActive$.value);
  }

  public isActive(): boolean {
    return this.isActive$.value;
  }
}
