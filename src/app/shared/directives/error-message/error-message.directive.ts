import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ErrorMessageConfig } from './models/error-message-config.model';

@Directive({
  selector: '[appErrorMessage]',
  standalone: true
})
export class ErrorMessageDirective {

  @Input('appErrorMessage')
  public config!: ErrorMessageConfig;

  private spanError!: HTMLSpanElement | undefined;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) { }

  @HostListener('blur')
  public onBlur() {
    this.validateControl();
  }

  @HostListener('input')
  public onInput() {
    this.validateControl();
  }

  private validateControl() {
    if (!this.config.errorMessages) {
      return;
    }

    if (this.config.control.status === 'INVALID') {
      for (const prop in this.config.control.errors) {
        this.removeErrorMessage();
        if (!this.config.errorMessages[prop]) return;

        this.addErrorMessage(this.config.errorMessages[prop]);
      }

      return;
    }

    this.removeErrorMessage();
  }

  private addErrorMessage(errorMessage: string) {
    this.removeErrorMessage();

    const nativeElement = this.elementRef.nativeElement;
    const spanId = `${ nativeElement.id }-error`;

    this.spanError = this.renderer.createElement('span') as HTMLSpanElement;
    this.spanError.className = 'form-control__highlight';
    this.spanError.innerText = errorMessage;
    this.spanError.setAttribute('id', spanId);

    nativeElement.setAttribute('aria-describedby', spanId);
    nativeElement.setAttribute('aria-invalid', 'true');

    nativeElement.parentElement!.classList.add('form-control-error');

    this.renderer.appendChild(nativeElement.parentElement, this.spanError);
  }

  private removeErrorMessage() {
    if (this.spanError) {
      const nativeElement = this.elementRef.nativeElement;
      nativeElement.parentElement!.classList.remove('form-control-error');
      nativeElement.removeAttribute('aria-describedby');
      nativeElement.setAttribute('aria-invalid', 'false');

      this.renderer.removeChild(
        nativeElement.parentElement,
        this.spanError
      );

      this.spanError = undefined;
    }
  }
}
