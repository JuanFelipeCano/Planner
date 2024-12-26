import { animate, state, style, transition, trigger } from '@angular/animations';

export const scaleUpDown = trigger('scaleUpDown', [
  state('void', style({ transform: 'scale(0)' })),
  transition(':enter, :leave', [
    animate(300),
  ]),
]);
