import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideUpDown = trigger('slide', [
  state('up', style({  opacity: 1, transform: 'translateY(0)' })),
  transition('* => up', [
    style({ opacity: 0, transform: 'translateY(100%)' }),
    animate('250ms ease-out'),
  ]),
  transition('up => *', [
    style({ opacity: 1, transform: 'translateY(0)' }),
    animate('250ms ease-in', style({ opacity: 0, transform: 'translateY(100%)' })),
  ]),
  state('down', style({ opacity: 1, transform: 'translateY(0)'})),
  transition('* => down', [
    style({ opacity: 0, transform: 'translateY(-100%)' }),
    animate('250ms ease-out'),
  ]),
  transition('down => *', [
    style({ opacity: 1, transform: 'translateY(0)' }),
    animate('250ms ease-in', style({ opacity: 0, transform: 'translateY(-100%)' })),
  ]),
]);
