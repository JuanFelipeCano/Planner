import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { slideUpDown } from '@shared/animations';
import { ToastService } from '@shared/services';
import { ToastAnimationDirection } from './models/toast-animation-direction.enum';
import { ToastConfig } from './models/toast-config.model';
import { ToastPosition } from './models/toast-position.enum';
import { ToastType } from './models/toast-type.enum';

const AnimationDirectionMapper = {
  [ToastPosition.BOTTOM_CENTER]: ToastAnimationDirection.UP,
  [ToastPosition.TOP_CENTER]: ToastAnimationDirection.DOWN,
};

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  animations: [
    slideUpDown,
  ],
})
export class ToastComponent implements OnInit {
  public config!: ToastConfig;
  public toastClasses: Array<string> = [];
  public animationDirection!: string;

  private readonly defaultDuration = 3000;

  constructor(
    private toastService: ToastService
  ) {}

  public ngOnInit(): void {
    this.toastService.getToast().subscribe({
      next: (config) => {
        this.config = config;
        this.setDefaultValues();
        this.setClasses();
        this.hide();
      }
    });
  }

  private setDefaultValues() {
    const { duration, position, type } = this.config;

    this.config = {
      ...this.config,
      duration: duration ?? this.defaultDuration,
      position: position ?? ToastPosition.BOTTOM_CENTER,
      type: type ?? ToastType.SUCCESS,
    };

    this.animationDirection = AnimationDirectionMapper[this.config.position!];
  }

  private hide(): void {
    setTimeout(() => {
      this.config.show = false;
      this.animationDirection = '';
      this.toastClasses = [];
    }, this.config.duration);
  }

  private setClasses(): void {
    this.toastClasses = [
      'toast-' + this.config.type,
      'toast-' + this.config.position,
    ];
  }
}
