/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef

} from '@angular/core';
import { sleep } from '@shared/utils';
import { FullScreenOptions } from './models/full-screen-options.model';

const DELAY_TIME = 100;

const FOUR_MILISECONDS = 'transform .4s ease';
const TRANSLATE_100 = 'translateY(100%)';
const TRANSLATE_0 = 'translateY(0)';

@Component({
  selector: 'app-full-screen',
  standalone: true,
  imports: [],
  templateUrl: './full-screen.component.html',
  styleUrl: './full-screen.component.scss'
})
export class FullScreenComponent implements FullScreenOptions, AfterViewInit, OnInit {

  @ViewChild('contentRef', { read: ViewContainerRef })
  public contentRef!: ViewContainerRef;

  @ViewChild('bottomSheetRef', { static: true })
  public bottomSheetRef!: ElementRef;

  @Input() public component!: any;
  @Input() public componentProps?: any;
  @Input() public config?: any;

  private startY!: number | undefined;
  private currentY!: number | undefined;
  private bottomSheet!: HTMLElement;
  private startTime!: number;

  private readonly limitDistance = 330;
  private readonly threshold = 100;
  private readonly velocityThreshold = 0.5;

  private componentRef!: ComponentRef<any>;
  private _promise = {
    resolve: () => {},
    reject: () => {}
  } as PromiseConstructor;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private elementRef: ElementRef,
  ) { }

  public ngAfterViewInit(): void {
    this.initialState();
  }

  public ngOnInit(): void {
    this.bottomSheet = this.bottomSheetRef.nativeElement;
    this.setTransitionAndTransform(FOUR_MILISECONDS, TRANSLATE_100);
  }

  public initialState() {
    this.changeDetectorRef.detectChanges();
    this.elementRef.nativeElement.style.display = 'none';
    document.querySelector('body')!.style.overflow = 'auto';
  }

  public resolveComponent(): void {
    this.contentRef.clear();
    this.componentRef = this.contentRef.createComponent(this.component);

    if (this.componentProps) {
      Object.assign(this.componentRef.instance, this.componentProps);
    }
  }

  public async open() {
    this.elementRef.nativeElement.style.display = 'block';
    document.querySelector('body')!.style.overflow = 'hidden';

    this.setTransition(FOUR_MILISECONDS);

    await sleep(DELAY_TIME);
    this.setTransform(TRANSLATE_0);
  }

  public onDidDismiss<T = any>(): Promise<{ data?: T }> {
    return new Promise<{ data?: any }>((resolve, reject) => {
      this._promise.resolve = resolve as any;
      this._promise.reject = reject as any;
    });
  }

  public async close(data?: unknown) {
    const ms = 350;
    this.setTransitionAndTransform(`transform ${ ms }ms ease`, TRANSLATE_100);

    await sleep(ms);
    this.initialState();

    await sleep(DELAY_TIME);
    this._promise.resolve({ data });
  }

  public closeFromBackground() {
    this.close();
  }

  @HostListener('document:keydown.escape')
  public closeByScape() {
    this.close();
  }

  // @HostListener('touchstart', ['$event'])
  public onTouchStart(event: TouchEvent) {
    this.startY = event.touches[0].clientY;
    this.currentY = this.startY;

    this.setTransition('none');
    this.startTime = Date.now();
  }

  // @HostListener('touchmove', ['$event'])
  public onTouchMove(event: TouchEvent) {
    const translateY = Math.max(0, event.touches[0].clientY - this.startY!);

    if (!this.startY) return;

    this.currentY = event.touches[0].clientY;

    this.setTransform(`translateY(${translateY}px)`);
  }

  // @HostListener('touchend')
  public onTouchEnd() {
    if (!this.startY) return;

    const endTime = Date.now();
    const duration = endTime - this.startTime;
    const distance = this.currentY! - this.startY;
    const velocity = Math.abs(distance / duration);

    if (
      (velocity > this.velocityThreshold &&
      (Math.abs(distance) < this.threshold)) ||
      distance > this.limitDistance
    ) {
      this.close();
    } else {
      this.setTransitionAndTransform(FOUR_MILISECONDS, TRANSLATE_0);
    }

    this.startY = undefined;
    this.currentY = undefined;
  }

  private setTransition(transition: string): void {
    this.bottomSheet.style.transition = transition;
  }

  private setTransform(transform: string): void {
    this.bottomSheet.style.transform = transform;
  }

  private setTransitionAndTransform(transition: string, transform: string): void {
    this.setTransition(transition);
    this.setTransform(transform);
  }
}
