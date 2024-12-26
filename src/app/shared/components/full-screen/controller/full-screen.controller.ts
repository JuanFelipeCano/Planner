import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { FullScreenComponent } from '../full-screen.component';
import { FullScreenOptions } from '../models/full-screen-options.model';

@Injectable({ providedIn: 'root' })
export class FullScreenController {
  protected componentRef!: ComponentRef<FullScreenComponent>;
  protected fullScreenComponent!: FullScreenComponent;

  private viewContainerRef!: ViewContainerRef;

  public setViewContainerRef(viewContainerRef: ViewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }

  public resolveComponentIntoPage() {
    this.viewContainerRef.clear();

    this.componentRef = this.viewContainerRef.createComponent(FullScreenComponent);
    this.fullScreenComponent = this.componentRef.instance;
  }

  public create(options: FullScreenOptions): FullScreenComponent {
    this.setOptions(options);
    this.fullScreenComponent?.resolveComponent();

    return this.fullScreenComponent;
  }

  private setOptions(options: FullScreenOptions) {
    this.fullScreenComponent.component = options.component;
    this.fullScreenComponent.componentProps = options.componentProps;
    this.fullScreenComponent.config = options.componentProps;
  }

  public dismiss(data?: unknown) {
    return this.fullScreenComponent.close(data);
  }
}
