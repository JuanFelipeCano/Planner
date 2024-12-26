import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

const slideIn = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ transform: 'translateX(100%)' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-out', style({ transform: 'translateX(-100%)' })),
    ]),
    query(':enter', [
      animate('300ms ease-out', style({ transform: 'translateX(0%)' })),
    ]),
  ]),
  query(':enter', animateChild()),
];

const slideOut = [
  style({ position: 'relative' }),
  query(':enter, :leave', [
    style({
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%'
    })
  ]),
  query(':enter', [
    style({ transform: 'translateX(-100%)' })
  ]),
  query(':leave', animateChild()),
  group([
    query(':leave', [
      animate('300ms ease-in', style({ transform: 'translateX(100%)' })),
    ]),
    query(':enter', [
      animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
    ]),
  ]),
  query(':enter', animateChild()),
];

const fromSignInToRegister = transition('SigInPage => RegisterPage', slideIn);

const fromRegisterToSignIn = transition('RegisterPage => SigInPage', slideOut);

const fromRegisterToCompleteRegistry = transition('RegisterPage => CompleteRegistryPage', slideIn);

const fromCompleteRegistryToRegister = transition('CompleteRegistryPage => RegisterPage', slideOut);

const fromHomeToTasks = transition('HomePage => TasksPage', slideIn);

const fromTasksToHome = transition('TasksPage => HomePage', slideOut);

export const slideInOut = trigger('slideInOut', [
  fromSignInToRegister,
  fromRegisterToSignIn,
  fromRegisterToCompleteRegistry,
  fromCompleteRegistryToRegister,
  fromHomeToTasks,
  fromTasksToHome,
]);
