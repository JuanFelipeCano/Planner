import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition('* => fadeIn', [
    style({ transform: 'scale(0)' }),
    animate('250ms ease-in'),
  ]),
  transition('* => fadeOut', [
    style({ transform: 'scale(-1)' }),
    animate('250ms ease-out'),
  ]),
]);
